#include <jni.h>
#include "react-native-pranob-lib.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_pranoblib_PranobLibModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return pranoblib::multiply(a, b);
}
