async function getHadith() {
    let hadithInput = document.getElementById("hadithId").value;

    let searchbtn = document.getElementById("gethadith");
    
    let hadithPara = document.getElementById("hadithText");

    //let bookName = document.getElementById("book-Name").value;

    try{
        
        response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-abudawud/${hadithInput}.json`);
        
        const data = await response.json();
        
        const hadithText = data.hadiths.map(hadiths => hadiths.text);

        const Book = data.metadata.name;

        hadithPara.innerText = hadithText;
        
        document.getElementById("book-Name").value = Book;
        
        console.log(data);
        
        if(!hadithInput){
            throw new Error("Could Not Fetch Hadith");
        }
    } catch(error){
        console.error(error)
    }
    
}

document.getElementById("gethadith").addEventListener("click", getHadith);