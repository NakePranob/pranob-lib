cmake_minimum_required(VERSION 3.4.1)
project(PranobLib)

set (CMAKE_VERBOSE_MAKEFILE ON)
set (CMAKE_CXX_STANDARD 14)

add_library(react-native-pranob-lib            SHARED
            ../cpp/react-native-pranob-lib.cpp
            cpp-adapter.cpp
)

# Specifies a path to native header files.
include_directories(
            ../cpp
)
