tasks.register("prepareKotlinBuildScriptModel"){}
val kotlinx_datetime_version: String by project

plugins {
    val kotlinVersion: String by System.getProperties()
    kotlin("plugin.serialization") version kotlinVersion
    kotlin("multiplatform") version kotlinVersion
    val kvisionVersion: String by System.getProperties()
    id("io.kvision") version kvisionVersion
}

version = "1.0.0-SNAPSHOT"
group = "epicer.frontend"

repositories {
    mavenCentral()
    mavenLocal()
}

// Versions
val kotlinVersion: String by System.getProperties()
val kvisionVersion: String by System.getProperties()

kotlin {

    js(IR) {
        browser {
            commonWebpackConfig {
                outputFileName = "main.bundle.js"
                sourceMaps = false
            }
            testTask {
                useKarma {
                    useChromeHeadless()
                }
            }
        }
        binaries.executable()
    }
    sourceSets["jsMain"].dependencies {
        implementation("io.kvision:kvision:$kvisionVersion")
        implementation("io.kvision:kvision-bootstrap:$kvisionVersion")
        implementation("io.kvision:kvision-datetime:$kvisionVersion")
        implementation("io.kvision:kvision-richtext:$kvisionVersion")
        implementation("io.kvision:kvision-tom-select:$kvisionVersion")
        implementation("io.kvision:kvision-bootstrap-upload:$kvisionVersion")
        implementation("io.kvision:kvision-imask:$kvisionVersion")
        implementation("io.kvision:kvision-toastify:$kvisionVersion")
        implementation("io.kvision:kvision-fontawesome:$kvisionVersion")
        implementation("io.kvision:kvision-bootstrap-icons:$kvisionVersion")
        implementation("io.kvision:kvision-i18n:$kvisionVersion")
        implementation("io.kvision:kvision-pace:$kvisionVersion")
        implementation("io.kvision:kvision-print:$kvisionVersion")
        implementation("io.kvision:kvision-handlebars:$kvisionVersion")
        implementation("io.kvision:kvision-chart:$kvisionVersion")
        implementation("io.kvision:kvision-tabulator:$kvisionVersion")
        implementation("io.kvision:kvision-maps:$kvisionVersion")
        implementation("io.kvision:kvision-rest:$kvisionVersion")
        implementation("io.kvision:kvision-jquery:$kvisionVersion")
        implementation("io.kvision:kvision-routing-navigo-ng:$kvisionVersion")
        implementation("io.kvision:kvision-state:$kvisionVersion")
        implementation("io.kvision:kvision-state-flow:$kvisionVersion")
        implementation("io.kvision:kvision-redux-kotlin:$kvisionVersion")
        implementation("io.kvision:kvision-select-remote:$kvisionVersion")
        implementation("io.kvision:kvision-tom-select-remote:$kvisionVersion")
        implementation("io.kvision:kvision-tabulator-remote:$kvisionVersion")
        implementation("org.jetbrains.kotlinx:kotlinx-datetime:$kotlinx_datetime_version")

        implementation(project(":common"))  // Link the common module
    }
    sourceSets["jsTest"].dependencies {
        implementation(kotlin("test-js"))
        implementation("io.kvision:kvision-testutils:$kvisionVersion")
    }

}
