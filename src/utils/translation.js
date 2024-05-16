export async function translateToUA(word) {
    const url = 'https://google-translation-unlimited.p.rapidapi.com/translate';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'f00a56a03fmshb59ec5f0f1c92b6p1e1854jsnae98d6e68873',
            'X-RapidAPI-Host': 'google-translation-unlimited.p.rapidapi.com'
        },
        body: new URLSearchParams({
            texte: `${word}`,
            to_lang: 'uk'
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result.translation_data.translation;
    } catch (error) {
        console.error(error);
    }
}

export async function getEngIPA(word) {
    const url = `https://wordsapiv1.p.rapidapi.com/words/${word}/pronunciation`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f00a56a03fmshb59ec5f0f1c92b6p1e1854jsnae98d6e68873',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result.pronunciation.all;
    } catch (error) {
        console.error(error);
    }
}