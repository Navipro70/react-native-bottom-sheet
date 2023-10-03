import { createContext } from 'react';
import type { Insets } from 'react-native';
import type Animated from 'react-native-reanimated';
import type { BottomSheetModalStackBehavior } from '../../components/bottomSheetModal';
import type { BottomSheetModalRef } from '../../components/bottomSheetModalProvider/types';

export interface BottomSheetModalInternalContextType {
  containerHeight: Animated.SharedValue<number>;
  containerOffset: Animated.SharedValue<Required<Insets>>;
  mountSheet: (
    key: string,
    ref: BottomSheetModalRef['ref'],
    stackBehavior: BottomSheetModalStackBehavior
  ) => void;
  unmountSheet: (key: string) => void;
  willUnmountSheet: (key: string) => void;
}

export const BottomSheetModalInternalContext =
  createContext<BottomSheetModalInternalContextType | null>(null);

export const BottomSheetModalInternalProvider =
  BottomSheetModalInternalContext.Provider;
