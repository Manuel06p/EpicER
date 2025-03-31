val kotlinx_datetime_version: String by project
val kotlinx_serialization_version: String by project

tasks.register("prepareKotlinBuildScriptModel"){}
tasks.register("prepareKotlinIdeaImport"){}


repositories {
    mavenCentral()
    maven { setUrl("https://jitpack.io") }
}

plugins {
    kotlin("jvm") version "2.1.10"
    id("org.jetbrains.kotlin.plugin.serialization") version "2.1.10"
}

group = "epicer"
version = "0.0.1"



dependencies {
    implementation("io.ktor:ktor-serialization-kotlinx-json:$kotlinx_serialization_version")
    implementation("org.jetbrains.kotlinx:kotlinx-datetime:$kotlinx_datetime_version")
}
