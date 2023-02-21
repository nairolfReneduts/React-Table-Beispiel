import { ProductPricePool } from "../Models/ProductPricePool";

export class DataService {
    static getMockData(): ProductPricePool[]{

        let productpricePools: ProductPricePool[] = [
            {
            Id: Math.random().toString(),
            Name: "Preise Köln",
            CreatedDate: new Date().toDateString(),
            LastUpdatedDate: new Date().toDateString(),
            Description: "Beispiel Description"
        },
        {
            Id: Math.random().toString(),
            Name: "Preise Bonn",
            CreatedDate: new Date().toDateString(),
            LastUpdatedDate: new Date().toDateString(),
            Description: "Beispiel Description"
        },
        {
            Id: Math.random().toString(),
            Name: "Preise München",
            CreatedDate: new Date().toDateString(),
            LastUpdatedDate: new Date().toDateString(),
            Description: "Hallo"
        },
        {
            Id: Math.random().toString(),
            Name: "Preise Bad Honnef",
            CreatedDate: new Date().toDateString(),
            LastUpdatedDate: new Date().toDateString(),
            Description: "Tschüss"
        },
        {
            Id: Math.random().toString(),
            Name: "Preise Rheinbreitbach",
            CreatedDate: new Date().toDateString(),
            LastUpdatedDate: new Date().toDateString(),
            Description: "Trompete"
        },
        {
            Id: Math.random().toString(),
            Name: "Preise Unkel",
            CreatedDate: new Date().toDateString(),
            LastUpdatedDate: new Date().toDateString(),
            Description: "Clown"
        },
        {
            Id: Math.random().toString(),
            Name: "Preise Kai",
            CreatedDate: new Date().toDateString(),
            LastUpdatedDate: new Date().toDateString(),
            Description: "Pferd"
        },
        {
            Id: Math.random().toString(),
            Name: "Preise Tim",
            CreatedDate: new Date().toDateString(),
            LastUpdatedDate: new Date().toDateString(),
            Description: "Esel"
        },
        {
            Id: Math.random().toString(),
            Name: "Preise Jörg",
            CreatedDate: new Date().toDateString(),
            LastUpdatedDate: new Date().toDateString(),
            Description: "Besen"
        },
        {
            Id: Math.random().toString(),
            Name: "Preise Dennis",
            CreatedDate: new Date().toDateString(),
            LastUpdatedDate: new Date().toDateString(),
            Description: "Beispiel Description"
        },
        {
            Id: Math.random().toString(),
            Name: "Preise Markus",
            CreatedDate: new Date().toDateString(),
            LastUpdatedDate: new Date().toDateString(),
            Description: "Beispiel Description"
        },
        {
            Id: Math.random().toString(),
            Name: "Preise Schnitzelwoche",
            CreatedDate: new Date().toDateString(),
            LastUpdatedDate: new Date().toDateString(),
            Description: "Beispiel Description"
        },
    ];

    return productpricePools;
    }
}