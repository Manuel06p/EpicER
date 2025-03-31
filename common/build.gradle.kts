val kotlinx_datetime_version: String by project
val kotlinx_serialization_version: String by project

plugins {
    kotlin("multiplatform") version "2.1.10"
    id("org.jetbrains.kotlin.plugin.serialization") version "2.1.10"
}

group = "epicer"
version = "0.0.1"

repositories {
    mavenCentral()
    maven { setUrl("https://jitpack.io") }
}
//d
//d
kotlin {
    jvm() // Declares a JVM target
    js(IR) { browser() } // JS target
    sourceSets {
        commonMain {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:$kotlinx_serialization_version")
                implementation("org.jetbrains.kotlinx:kotlinx-datetime:$kotlinx_datetime_version")

            }
        }
    }
}
