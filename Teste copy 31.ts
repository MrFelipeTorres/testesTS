class ReportGenerator {
    generatePDF(reportData: object): string {
        return `Generated PDF report`;
    }

    generateExcel(reportData: object): string {
        return `Generated Excel report`;
    }

    generateCSV(reportData: object): string {
        return `Generated CSV report`;
    }
}

class ReportService {
    private generator: ReportGenerator;

    constructor(generator: ReportGenerator) {
        this.generator = generator;
    }

    generatePDF(reportData: object): string {
        return this.generator.generatePDF(reportData);
    }

    generateExcel(reportData: object): string {
        return this.generator.generateExcel(reportData);
    }

    generateCSV(reportData: object): string {
        return this.generator.generateCSV(reportData);
    }
}
