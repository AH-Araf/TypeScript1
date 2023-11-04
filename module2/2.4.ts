{
    // generic interface

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?: X;
    }

    type EmilabWatch = {
        brand: string;
        model: string;
        display: string;
    };

    const poorDeveloper: Developer<EmilabWatch> = {
        name: "Persian",
        computer: {
            brand: "Asus",
            model: "X-255UR",
            releaseYear: 2013,
        },
        smartWatch: {
            brand: "Emilab",
            model: "kw66",
            display: "OLED",
        },
    };

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    interface YamahaBike {
        model: string;
        engineCapacity: string;
    }

    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: "Rich Dev",
        computer: {
            brand: "HP",
            model: "X-25UR",
            releaseYear: 2018,
        },
        smartWatch: {
            brand: "Apple Watch",
            model: "Something",
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            model: "Yamaha",
            engineCapacity: "100cc",
        },
    };


    // interface Developer<T> {
    //     name: string;
    //     computer: {
    //         brand: string;
    //         model: string;
    //         releaseYear: number;
    //     }
    //     smartWatch: T,

    // }

    // const poorDeveloper: Developer<{
    //     brand: string,
    //     model: string,
    //     display: string
    // }> = {
    //     name: 'Asif',
    //     computer: {
    //         brand: 'hp',
    //         model: 'asfesd',
    //         releaseYear: 2015
    //     },
    //     smartWatch: {
    //         brand: 'pixel watch',
    //         model: '45-p',
    //         display: 'oled'
    //     }
    // }

    // const richDeveloper: Developer<{
    //     brand: string,
    //     model: string,
    //     hr: boolean,
    //     bp: boolean
    // }> = {
    //     name: 'Araaf',
    //     computer: {
    //         brand: 'asus',
    //         model: 'tuf',
    //         releaseYear: 2020
    //     },
    //     smartWatch: {
    //         brand: 'apple',
    //         model: 'watch-ultra',
    //         hr: true,
    //         bp: true,
    //     }
    // }








    // 
}