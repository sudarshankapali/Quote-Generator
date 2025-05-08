let currentIndex = -1;

function loadStrings() {
    const stored = sessionStorage.getItem('randomQuotes');
    return stored ? JSON.parse(stored) : [];
  }

  function saveStrings(arr) {
    sessionStorage.setItem('randomQuotes', JSON.stringify(arr));
  }

  function updateDisplay() {
    const strings = loadStrings();
    const display = document.getElementById('quote');
    if (currentIndex >= 0 && currentIndex < strings.length) {
      display.textContent = strings[currentIndex];
    } else {
      display.textContent = 'No string selected';
    }
  }

function generate(){
    const scienceQuotes = [
        "[Science] Science is a way of thinking much more than it is a body of knowledge. — Carl Sagan",
        "[Science] The good thing about science is that it's true whether or not you believe in it. — Neil deGrasse Tyson",
        "[Science] Research is what I'm doing when I don't know what I'm doing. — Wernher von Braun",
        "[Science] Somewhere, something incredible is waiting to be known. — Carl Sagan",
        "[Science] Equipped with his five senses, man explores the universe around him and calls the adventure Science. — Edwin Hubble",
        "[Science] The important thing is to never stop questioning. — Albert Einstein",
        "[Science] Science knows no country, because knowledge belongs to humanity. — Louis Pasteur",
        "[Science] The science of today is the technology of tomorrow. — Edward Teller",
        "[Science] Science without religion is lame, religion without science is blind. — Albert Einstein",
        "[Science] Wonder is the seed of knowledge. — Francis Bacon"
      ];
      
      const lifeQuotes = [
        "[Life] Life is what happens when you're busy making other plans. — John Lennon",
        "[Life] In the middle of every difficulty lies opportunity. — Albert Einstein",
        "[Life] The purpose of our lives is to be happy. — Dalai Lama",
        "[Life] Life is really simple, but we insist on making it complicated. — Confucius",
        "[Life] Your time is limited, so don't waste it living someone else's life. — Steve Jobs",
        "[Life] Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. — Buddha",
        "[Life] The biggest adventure you can take is to live the life of your dreams. — Oprah Winfrey",
        "[Life] Life isn't about finding yourself. Life is about creating yourself. — George Bernard Shaw",
        "[Life] Difficulties in life are intended to make us better, not bitter. — Dan Reeves",
        "[Life] Keep smiling, because life is a beautiful thing and there's so much to smile about. — Marilyn Monroe"
      ];           

    let x = Math.floor((Math.random() * 10));
    let quote;
    let strings = loadStrings(); 
    const element = document.getElementById("options").value;
    if(element == "science"){
        quote = scienceQuotes[x];
        strings.push(quote);
        saveStrings(strings);                  
        currentIndex = strings.length - 1;      
        updateDisplay(); 
        document.getElementById("quote").innerText = quote;
    }else{
        quote = lifeQuotes[x];
        strings.push(quote);
        saveStrings(strings);
        currentIndex = strings.length - 1;
        updateDisplay(); 
        document.getElementById("quote").innerText = quote;
    }
}

function mode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function changeSizeBySlider(){
    let slider = document.getElementById("slider");
    document.getElementById("quote").style.fontSize = slider.value + "px";
}

function nextQuote(){
    let strings = loadStrings();
    if (currentIndex < strings.length - 1) {
        currentIndex++;
        updateDisplay();
      }
}

function previousQuote(){
    if (currentIndex > 0) {
        currentIndex--;
        updateDisplay();
      }
}

function copyToClipboard(){
    let text = document.getElementById("quote").innerHTML;
    const copyContent = async () => {
        try {
          await navigator.clipboard.writeText(text);
          alert('Content copied to clipboard');
        } catch (err) {
          alert('Failed to copy: ', err);
        }
      }
      copyContent();
}