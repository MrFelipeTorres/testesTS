class FileExporter {
    exportFile(content: string, format: string): string {
        return `Exported ${format}: ${content}`;
    }
}

class ExportService {
    private exporter: FileExporter;

    constructor(exporter: FileExporter) {
        this.exporter = exporter;
    }

    exportFile(content: string, format: string): string {
        return this.exporter.exportFile(content, format);
    }
}
