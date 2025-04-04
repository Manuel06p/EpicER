import com.varabyte.kobweb.gradle.application.util.configAsKobwebApplication
import org.gradle.kotlin.dsl.project

val kotlinx_datetime_version: String by project
val kotlinx_serialization_version: String by project

tasks.register("prepareKotlinBuildScriptModel"){}

plugins {
    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.compose.compiler)
    alias(libs.plugins.kobweb.application)
    alias(libs.plugins.kobwebx.markdown)
}

group = "epicer.frontend"
version = "1.0-SNAPSHOT"

kobweb {
    app {
        index {
            description.set("Powered by Kobweb")
        }
    }
}
repositories {
    maven(url = "https://jitpack.io")
}

kotlin {
    // This example is frontend only. However, for a fullstack app, you can uncomment the includeServer parameter
    // and the `jvmMain` source set below.
    configAsKobwebApplication("frontend" /*, includeServer = true*/)

    sourceSets {
        commonMain {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:$kotlinx_serialization_version")
                implementation("org.jetbrains.kotlinx:kotlinx-datetime:$kotlinx_datetime_version")
                implementation(project(":common"))
//                implementation("com.github.stevdza-san:KotlinBootstrap:0.1.5")
            }
        }

//        commonMain.dependencies {
//
//            implementation("ktor-serialization-kotlinx-json:$kotlinx_serialization_version")
//            implementation("org.jetbrains.kotlinx:kotlinx-datetime:$kotlinx_datetime_version")
//        }

        jsMain.dependencies {
            implementation(libs.compose.runtime)
            implementation(libs.compose.html.core)
            implementation(libs.kobweb.core)
            implementation(libs.kobweb.silk)
            // This default template uses built-in SVG icons, but what's available is limited.
            // Uncomment the following if you want access to a large set of font-awesome icons:
            implementation(libs.silk.icons.mdi)
            implementation(libs.silk.icons.fa)
            implementation(libs.kobwebx.markdown)
        }

        // Uncomment the following if you pass `includeServer = true` into the `configAsKobwebApplication` call.
//        jvmMain.dependencies {
//            compileOnly(libs.kobweb.api) // Provided by Kobweb backend at runtime
//        }
    }
}
