class DataProcessor {
    processData(data: string): string {
        return data.trim();
    }
}

class DataService {
    private processor: DataProcessor;

    constructor(processor: DataProcessor) {
        this.processor = processor;
    }

    processData(data: string): string {
        return this.processor.processData(data);
    }
}
