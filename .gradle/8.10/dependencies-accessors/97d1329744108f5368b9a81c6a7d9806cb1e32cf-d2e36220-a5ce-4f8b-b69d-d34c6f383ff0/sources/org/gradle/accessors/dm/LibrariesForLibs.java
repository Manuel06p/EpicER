package org.gradle.accessors.dm;

import org.gradle.api.NonNullApi;
import org.gradle.api.artifacts.MinimalExternalModuleDependency;
import org.gradle.plugin.use.PluginDependency;
import org.gradle.api.artifacts.ExternalModuleDependencyBundle;
import org.gradle.api.artifacts.MutableVersionConstraint;
import org.gradle.api.provider.Provider;
import org.gradle.api.model.ObjectFactory;
import org.gradle.api.provider.ProviderFactory;
import org.gradle.api.internal.catalog.AbstractExternalDependencyFactory;
import org.gradle.api.internal.catalog.DefaultVersionCatalog;
import java.util.Map;
import org.gradle.api.internal.attributes.ImmutableAttributesFactory;
import org.gradle.api.internal.artifacts.dsl.CapabilityNotationParser;
import javax.inject.Inject;

/**
 * A catalog of dependencies accessible via the {@code libs} extension.
 */
@NonNullApi
public class LibrariesForLibs extends AbstractExternalDependencyFactory {

    private final AbstractExternalDependencyFactory owner = this;
    private final ComposeLibraryAccessors laccForComposeLibraryAccessors = new ComposeLibraryAccessors(owner);
    private final KobwebLibraryAccessors laccForKobwebLibraryAccessors = new KobwebLibraryAccessors(owner);
    private final KobwebxLibraryAccessors laccForKobwebxLibraryAccessors = new KobwebxLibraryAccessors(owner);
    private final SilkLibraryAccessors laccForSilkLibraryAccessors = new SilkLibraryAccessors(owner);
    private final VersionAccessors vaccForVersionAccessors = new VersionAccessors(providers, config);
    private final BundleAccessors baccForBundleAccessors = new BundleAccessors(objects, providers, config, attributesFactory, capabilityNotationParser);
    private final PluginAccessors paccForPluginAccessors = new PluginAccessors(providers, config);

    @Inject
    public LibrariesForLibs(DefaultVersionCatalog config, ProviderFactory providers, ObjectFactory objects, ImmutableAttributesFactory attributesFactory, CapabilityNotationParser capabilityNotationParser) {
        super(config, providers, objects, attributesFactory, capabilityNotationParser);
    }

    /**
     * Group of libraries at <b>compose</b>
     */
    public ComposeLibraryAccessors getCompose() {
        return laccForComposeLibraryAccessors;
    }

    /**
     * Group of libraries at <b>kobweb</b>
     */
    public KobwebLibraryAccessors getKobweb() {
        return laccForKobwebLibraryAccessors;
    }

    /**
     * Group of libraries at <b>kobwebx</b>
     */
    public KobwebxLibraryAccessors getKobwebx() {
        return laccForKobwebxLibraryAccessors;
    }

    /**
     * Group of libraries at <b>silk</b>
     */
    public SilkLibraryAccessors getSilk() {
        return laccForSilkLibraryAccessors;
    }

    /**
     * Group of versions at <b>versions</b>
     */
    public VersionAccessors getVersions() {
        return vaccForVersionAccessors;
    }

    /**
     * Group of bundles at <b>bundles</b>
     */
    public BundleAccessors getBundles() {
        return baccForBundleAccessors;
    }

    /**
     * Group of plugins at <b>plugins</b>
     */
    public PluginAccessors getPlugins() {
        return paccForPluginAccessors;
    }

    public static class ComposeLibraryAccessors extends SubDependencyFactory {
        private final ComposeHtmlLibraryAccessors laccForComposeHtmlLibraryAccessors = new ComposeHtmlLibraryAccessors(owner);

        public ComposeLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

        /**
         * Dependency provider for <b>runtime</b> with <b>org.jetbrains.compose.runtime:runtime</b> coordinates and
         * with version reference <b>jetbrains.compose</b>
         * <p>
         * This dependency was declared in catalog libs.versions.toml
         */
        public Provider<MinimalExternalModuleDependency> getRuntime() {
            return create("compose.runtime");
        }

        /**
         * Group of libraries at <b>compose.html</b>
         */
        public ComposeHtmlLibraryAccessors getHtml() {
            return laccForComposeHtmlLibraryAccessors;
        }

    }

    public static class ComposeHtmlLibraryAccessors extends SubDependencyFactory {

        public ComposeHtmlLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

        /**
         * Dependency provider for <b>core</b> with <b>org.jetbrains.compose.html:html-core</b> coordinates and
         * with version reference <b>jetbrains.compose</b>
         * <p>
         * This dependency was declared in catalog libs.versions.toml
         */
        public Provider<MinimalExternalModuleDependency> getCore() {
            return create("compose.html.core");
        }

    }

    public static class KobwebLibraryAccessors extends SubDependencyFactory {

        public KobwebLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

        /**
         * Dependency provider for <b>api</b> with <b>com.varabyte.kobweb:kobweb-api</b> coordinates and
         * with version reference <b>kobweb</b>
         * <p>
         * This dependency was declared in catalog libs.versions.toml
         */
        public Provider<MinimalExternalModuleDependency> getApi() {
            return create("kobweb.api");
        }

        /**
         * Dependency provider for <b>core</b> with <b>com.varabyte.kobweb:kobweb-core</b> coordinates and
         * with version reference <b>kobweb</b>
         * <p>
         * This dependency was declared in catalog libs.versions.toml
         */
        public Provider<MinimalExternalModuleDependency> getCore() {
            return create("kobweb.core");
        }

        /**
         * Dependency provider for <b>silk</b> with <b>com.varabyte.kobweb:kobweb-silk</b> coordinates and
         * with version reference <b>kobweb</b>
         * <p>
         * This dependency was declared in catalog libs.versions.toml
         */
        public Provider<MinimalExternalModuleDependency> getSilk() {
            return create("kobweb.silk");
        }

        /**
         * Dependency provider for <b>worker</b> with <b>com.varabyte.kobweb:kobweb-worker</b> coordinates and
         * with version reference <b>kobweb</b>
         * <p>
         * This dependency was declared in catalog libs.versions.toml
         */
        public Provider<MinimalExternalModuleDependency> getWorker() {
            return create("kobweb.worker");
        }

    }

    public static class KobwebxLibraryAccessors extends SubDependencyFactory {
        private final KobwebxSerializationLibraryAccessors laccForKobwebxSerializationLibraryAccessors = new KobwebxSerializationLibraryAccessors(owner);

        public KobwebxLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

        /**
         * Dependency provider for <b>markdown</b> with <b>com.varabyte.kobwebx:kobwebx-markdown</b> coordinates and
         * with version reference <b>kobweb</b>
         * <p>
         * This dependency was declared in catalog libs.versions.toml
         */
        public Provider<MinimalExternalModuleDependency> getMarkdown() {
            return create("kobwebx.markdown");
        }

        /**
         * Group of libraries at <b>kobwebx.serialization</b>
         */
        public KobwebxSerializationLibraryAccessors getSerialization() {
            return laccForKobwebxSerializationLibraryAccessors;
        }

    }

    public static class KobwebxSerializationLibraryAccessors extends SubDependencyFactory {

        public KobwebxSerializationLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

        /**
         * Dependency provider for <b>kotlinx</b> with <b>com.varabyte.kobwebx:kobwebx-serialization-kotlinx</b> coordinates and
         * with version reference <b>kobweb</b>
         * <p>
         * This dependency was declared in catalog libs.versions.toml
         */
        public Provider<MinimalExternalModuleDependency> getKotlinx() {
            return create("kobwebx.serialization.kotlinx");
        }

    }

    public static class SilkLibraryAccessors extends SubDependencyFactory {
        private final SilkIconsLibraryAccessors laccForSilkIconsLibraryAccessors = new SilkIconsLibraryAccessors(owner);

        public SilkLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

        /**
         * Dependency provider for <b>foundation</b> with <b>com.varabyte.kobweb:silk-foundation</b> coordinates and
         * with version reference <b>kobweb</b>
         * <p>
         * This dependency was declared in catalog libs.versions.toml
         */
        public Provider<MinimalExternalModuleDependency> getFoundation() {
            return create("silk.foundation");
        }

        /**
         * Group of libraries at <b>silk.icons</b>
         */
        public SilkIconsLibraryAccessors getIcons() {
            return laccForSilkIconsLibraryAccessors;
        }

    }

    public static class SilkIconsLibraryAccessors extends SubDependencyFactory {

        public SilkIconsLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

        /**
         * Dependency provider for <b>fa</b> with <b>com.varabyte.kobwebx:silk-icons-fa</b> coordinates and
         * with version reference <b>kobweb</b>
         * <p>
         * This dependency was declared in catalog libs.versions.toml
         */
        public Provider<MinimalExternalModuleDependency> getFa() {
            return create("silk.icons.fa");
        }

        /**
         * Dependency provider for <b>mdi</b> with <b>com.varabyte.kobwebx:silk-icons-mdi</b> coordinates and
         * with version reference <b>kobweb</b>
         * <p>
         * This dependency was declared in catalog libs.versions.toml
         */
        public Provider<MinimalExternalModuleDependency> getMdi() {
            return create("silk.icons.mdi");
        }

    }

    public static class VersionAccessors extends VersionFactory  {

        private final JetbrainsVersionAccessors vaccForJetbrainsVersionAccessors = new JetbrainsVersionAccessors(providers, config);
        public VersionAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

        /**
         * Version alias <b>kobweb</b> with value <b>0.20.3</b>
         * <p>
         * If the version is a rich version and cannot be represented as a
         * single version string, an empty string is returned.
         * <p>
         * This version was declared in catalog libs.versions.toml
         */
        public Provider<String> getKobweb() { return getVersion("kobweb"); }

        /**
         * Version alias <b>kotlin</b> with value <b>2.1.10</b>
         * <p>
         * If the version is a rich version and cannot be represented as a
         * single version string, an empty string is returned.
         * <p>
         * This version was declared in catalog libs.versions.toml
         */
        public Provider<String> getKotlin() { return getVersion("kotlin"); }

        /**
         * Group of versions at <b>versions.jetbrains</b>
         */
        public JetbrainsVersionAccessors getJetbrains() {
            return vaccForJetbrainsVersionAccessors;
        }

    }

    public static class JetbrainsVersionAccessors extends VersionFactory  {

        public JetbrainsVersionAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

        /**
         * Version alias <b>jetbrains.compose</b> with value <b>1.7.1</b>
         * <p>
         * If the version is a rich version and cannot be represented as a
         * single version string, an empty string is returned.
         * <p>
         * This version was declared in catalog libs.versions.toml
         */
        public Provider<String> getCompose() { return getVersion("jetbrains.compose"); }

    }

    public static class BundleAccessors extends BundleFactory {

        public BundleAccessors(ObjectFactory objects, ProviderFactory providers, DefaultVersionCatalog config, ImmutableAttributesFactory attributesFactory, CapabilityNotationParser capabilityNotationParser) { super(objects, providers, config, attributesFactory, capabilityNotationParser); }

    }

    public static class PluginAccessors extends PluginFactory {
        private final ComposePluginAccessors paccForComposePluginAccessors = new ComposePluginAccessors(providers, config);
        private final KobwebPluginAccessors paccForKobwebPluginAccessors = new KobwebPluginAccessors(providers, config);
        private final KobwebxPluginAccessors paccForKobwebxPluginAccessors = new KobwebxPluginAccessors(providers, config);
        private final KotlinPluginAccessors paccForKotlinPluginAccessors = new KotlinPluginAccessors(providers, config);

        public PluginAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

        /**
         * Group of plugins at <b>plugins.compose</b>
         */
        public ComposePluginAccessors getCompose() {
            return paccForComposePluginAccessors;
        }

        /**
         * Group of plugins at <b>plugins.kobweb</b>
         */
        public KobwebPluginAccessors getKobweb() {
            return paccForKobwebPluginAccessors;
        }

        /**
         * Group of plugins at <b>plugins.kobwebx</b>
         */
        public KobwebxPluginAccessors getKobwebx() {
            return paccForKobwebxPluginAccessors;
        }

        /**
         * Group of plugins at <b>plugins.kotlin</b>
         */
        public KotlinPluginAccessors getKotlin() {
            return paccForKotlinPluginAccessors;
        }

    }

    public static class ComposePluginAccessors extends PluginFactory {

        public ComposePluginAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

        /**
         * Plugin provider for <b>compose.compiler</b> with plugin id <b>org.jetbrains.kotlin.plugin.compose</b> and
         * with version reference <b>kotlin</b>
         * <p>
         * This plugin was declared in catalog libs.versions.toml
         */
        public Provider<PluginDependency> getCompiler() { return createPlugin("compose.compiler"); }

    }

    public static class KobwebPluginAccessors extends PluginFactory {

        public KobwebPluginAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

        /**
         * Plugin provider for <b>kobweb.application</b> with plugin id <b>com.varabyte.kobweb.application</b> and
         * with version reference <b>kobweb</b>
         * <p>
         * This plugin was declared in catalog libs.versions.toml
         */
        public Provider<PluginDependency> getApplication() { return createPlugin("kobweb.application"); }

        /**
         * Plugin provider for <b>kobweb.library</b> with plugin id <b>com.varabyte.kobweb.library</b> and
         * with version reference <b>kobweb</b>
         * <p>
         * This plugin was declared in catalog libs.versions.toml
         */
        public Provider<PluginDependency> getLibrary() { return createPlugin("kobweb.library"); }

        /**
         * Plugin provider for <b>kobweb.worker</b> with plugin id <b>com.varabyte.kobweb.worker</b> and
         * with version reference <b>kobweb</b>
         * <p>
         * This plugin was declared in catalog libs.versions.toml
         */
        public Provider<PluginDependency> getWorker() { return createPlugin("kobweb.worker"); }

    }

    public static class KobwebxPluginAccessors extends PluginFactory {

        public KobwebxPluginAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

        /**
         * Plugin provider for <b>kobwebx.markdown</b> with plugin id <b>com.varabyte.kobwebx.markdown</b> and
         * with version reference <b>kobweb</b>
         * <p>
         * This plugin was declared in catalog libs.versions.toml
         */
        public Provider<PluginDependency> getMarkdown() { return createPlugin("kobwebx.markdown"); }

    }

    public static class KotlinPluginAccessors extends PluginFactory {

        public KotlinPluginAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

        /**
         * Plugin provider for <b>kotlin.multiplatform</b> with plugin id <b>org.jetbrains.kotlin.multiplatform</b> and
         * with version reference <b>kotlin</b>
         * <p>
         * This plugin was declared in catalog libs.versions.toml
         */
        public Provider<PluginDependency> getMultiplatform() { return createPlugin("kotlin.multiplatform"); }

    }

}
