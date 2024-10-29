class FileImporter {
    importCSV(filePath: string): string {
        return `Imported data from ${filePath}`;
    }

    importJSON(filePath: string): string {
        return `Imported JSON data from ${filePath}`;
    }

    importXML(filePath: string): string {
        return `Imported XML data from ${filePath}`;
    }
}

class ImportService {
    private importer: FileImporter;

    constructor(importer: FileImporter) {
        this.importer = importer;
    }

    importCSV(filePath: string): string {
        return this.importer.importCSV(filePath);
    }

    importJSON(filePath: string): string {
        return this.importer.importJSON(filePath);
    }

    importXML(filePath: string): string {
        return this.importer.importXML(filePath);
    }
}
