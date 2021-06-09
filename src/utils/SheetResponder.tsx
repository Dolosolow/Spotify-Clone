import { Animated, PanResponder, Dimensions } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import ReAnimated, { useAnimatedGestureHandler } from "react-native-reanimated";

export default class SheetResponder {
  private coords: Animated.ValueXY;
  private translateY: Animated.Value;
  private currentIndex: number;
  private threshold: number;
  private height: number = Dimensions.get("window").height;
  private enableGestures: boolean = false;
  nativeYPosition: number = 1;
  snapPoints: number[];

  constructor(snapPoints: number[], initialIndex: number, threshold: number) {
    this.coords = new Animated.ValueXY({ x: 0, y: this.height - snapPoints[initialIndex] });
    this.translateY = new Animated.Value(this.height - snapPoints[initialIndex]);
    this.currentIndex = initialIndex;
    this.snapPoints = snapPoints;
    this.threshold = threshold;
  }

  onGestureEvent = () => {
    return Animated.event([{ nativeEvent: { translateY: this.translateY } }], {
      useNativeDriver: true,
    });
  };

  getAnimatedTranslateY = () => {
    return this.translateY;
  };

  animateToSnap = (snapIndex: number) => {
    const XYCoords = { x: 0, y: this.height - this.snapPoints[snapIndex] };
    Animated.spring(this.coords, {
      useNativeDriver: false,
      toValue: XYCoords,
      bounciness: 0,
      speed: 3,
    }).start();
  };

  setNativeYPos = (position: number) => {
    this.nativeYPosition = position;
  };

  getNativeYPos = () => {
    return this.nativeYPosition;
  };

  getAnimatedCoordsLayout = () => {
    return this.coords.getLayout();
  };

  getCurrentSnapIndex = () => {
    return this.currentIndex;
  };

  private getNewXYValue = () => {
    const upperBoundaryPoint = this.height - this.snapPoints[this.currentIndex] - this.threshold;
    const lowerBoundaryPoint = this.height - this.snapPoints[this.currentIndex] + this.threshold;
    const isMaxIndex = this.currentIndex < this.snapPoints.length - 1;
    const isMinIndex = this.currentIndex >= 0;

    let newValue: { x: number; y: number };

    if (this.nativeYPosition < upperBoundaryPoint && isMaxIndex) {
      newValue = { x: 0, y: this.height - this.snapPoints[this.currentIndex + 1] };
      this.currentIndex += 1;
    } else if (this.nativeYPosition > lowerBoundaryPoint && isMinIndex) {
      newValue = { x: 0, y: this.height - this.snapPoints[this.currentIndex - 1] };
      this.currentIndex -= 1;
    } else {
      newValue = { x: 0, y: this.height - this.snapPoints[this.currentIndex] };
    }

    return newValue;
  };

  getPanResponder = () => {
    return PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        if (this.enableGestures) {
          this.coords.setOffset({ x: 0, y: (this.coords.y as any)._value });
        }
      },
      onPanResponderMove: (e, gesture) => {
        if (this.enableGestures) {
          this.coords.setValue({ x: 0, y: gesture.dy });
          console.log(`m: ${e.nativeEvent.pageY}`);
        }
      },
      onPanResponderRelease: (e, gesture) => {
        this.coords.flattenOffset();

        const newValue = this.getNewXYValue();

        Animated.spring(this.coords, {
          useNativeDriver: false,
          toValue: newValue,
          bounciness: 0,
          speed: 3,
        }).start();
      },
    });
  };
}

// import { Animated, PanResponder, Dimensions } from "react-native";

// export default class SheetResponder {
//   private coords: Animated.ValueXY;
//   private currentIndex: number;
//   private threshold: number;
//   private height: number = Dimensions.get("window").height;
//   nativeYPosition: number = 1;
//   snapPoints: number[];

//   constructor(snapPoints: number[], initialIndex: number, threshold: number) {
//     this.coords = new Animated.ValueXY({ x: 0, y: this.height - snapPoints[initialIndex] });
//     this.currentIndex = initialIndex;
//     this.snapPoints = snapPoints;
//     this.threshold = threshold;
//   }

//   animateToSnap = (snapIndex: number) => {
//     const XYCoords = { x: 0, y: this.height - this.snapPoints[snapIndex] };
//     Animated.spring(this.coords, {
//       useNativeDriver: false,
//       toValue: XYCoords,
//       bounciness: 0,
//       speed: 3,
//     }).start();
//   };

//   setNativeYPos = (position: number) => {
//     this.nativeYPosition = position;
//   };

//   getNativeYPos = () => {
//     return this.nativeYPosition;
//   };

//   getAnimatedCoordsLayout = () => {
//     return this.coords.getLayout();
//   };

//   getCurrentSnapIndex = () => {
//     return this.currentIndex;
//   };

//   private getNewXYValue = () => {
//     const upperBoundaryPoint = this.height - this.snapPoints[this.currentIndex] - this.threshold;
//     const lowerBoundaryPoint = this.height - this.snapPoints[this.currentIndex] + this.threshold;
//     const isMaxIndex = this.currentIndex < this.snapPoints.length - 1;
//     const isMinIndex = this.currentIndex >= 0;

//     let newValue: { x: number; y: number };

//     if (this.nativeYPosition >= -14) {
//       if (this.nativeYPosition < upperBoundaryPoint && isMaxIndex) {
//         newValue = { x: 0, y: this.height - this.snapPoints[this.currentIndex + 1] };
//         this.currentIndex += 1;
//       } else if (this.nativeYPosition > lowerBoundaryPoint && isMinIndex) {
//         newValue = { x: 0, y: this.height - this.snapPoints[this.currentIndex - 1] };
//         this.currentIndex -= 1;
//       } else {
//         newValue = { x: 0, y: this.height - this.snapPoints[this.currentIndex] };
//       }
//     } else {
//       newValue = { x: 0, y: this.height - this.snapPoints[this.currentIndex] };
//     }

//     return newValue;
//   };

//   getPanResponder = () => {
//     return PanResponder.create({
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderGrant: () => {
//         this.coords.setOffset({ x: 0, y: (this.coords.y as any)._value });
//       },
//       onPanResponderMove: (_, gesture) => {
//         this.coords.setValue({ x: 0, y: gesture.dy });
//       },
//       onPanResponderRelease: (e, gesture) => {
//         this.coords.flattenOffset();

//         const newValue = this.getNewXYValue();

//         Animated.spring(this.coords, {
//           useNativeDriver: false,
//           toValue: newValue,
//           bounciness: 0,
//           speed: 3,
//         }).start();
//       },
//     });
//   };
// }
