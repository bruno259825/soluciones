export enum SequenceImagesEnum {
    POKEMON_FRONT,
    POKEMON_BACK,
}

export interface Image {
    url: string;
    text: string;
}

export class SequenceImagesUtils {

    private static pokemonTexts = [
        "¡Atrapa tu pokemón!",
        "Entrena a tus pokemones",
        "La Liga Pokémon te espera",
        "La batalla comienza",
        "Cada Pokémon tiene su propia historia"
    ];

    private static pokemonTextsV2 = [
        "Encontraste un pokemón desconocido",
        "¡A luchar!",
        "No subestimes al rival",
        "Un viaje lleno de criaturas y emociones",
        "..."
    ];

    public static getImages(sequenceOption: SequenceImagesEnum): Image[] {
        const images: Image[] = [];
        let texts: string[] = [];
        let urlBase;

        switch (sequenceOption) {
            case SequenceImagesEnum.POKEMON_FRONT: {
                urlBase = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home";
                texts = this.pokemonTexts;
                break;
            }
            case SequenceImagesEnum.POKEMON_BACK: {
                urlBase = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back";
                texts = this.pokemonTextsV2;
                break;
            }
            default:
                return images;
        }

        for (let i = 0; i < 5; i++) {
            const url = `${urlBase}/${i}.png`;
            const text = texts[i];
            images.push({ url, text });
        }

        return images;
    }
}