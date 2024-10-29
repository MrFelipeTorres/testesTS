class ConfigLoader {
    loadConfig(): object {
        return { setting: "value" };
    }
}

class AppService {
    private loader: ConfigLoader;

    constructor(loader: ConfigLoader) {
        this.loader = loader;
    }

    loadConfig(): object {
        return this.loader.loadConfig();
    }
}
