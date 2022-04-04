export function translateUnac(text: string): string {
    switch(text) { 
        case "hi": { 
            return "hola"; 
        } 
        case "bye": { 
            return "adios"; 
        } 
        case "moon": { 
            return "luna"; 
        }
        default: { 
            return "default"; 
        } 
    } 
}