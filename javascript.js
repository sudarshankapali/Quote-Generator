function generate(){
    const scienceQuotes = [
        "Science is a way of thinking much more than it is a body of knowledge. — Carl Sagan",
        "The good thing about science is that it's true whether or not you believe in it. — Neil deGrasse Tyson",
        "Research is what I'm doing when I don't know what I'm doing. — Wernher von Braun",
        "Somewhere, something incredible is waiting to be known. — Carl Sagan",
        "Equipped with his five senses, man explores the universe around him and calls the adventure Science. — Edwin Hubble",
        "The important thing is to never stop questioning. — Albert Einstein",
        "Science knows no country, because knowledge belongs to humanity. — Louis Pasteur",
        "The science of today is the technology of tomorrow. — Edward Teller",
        "Science without religion is lame, religion without science is blind. — Albert Einstein",
        "Wonder is the seed of knowledge. — Francis Bacon"
      ];
      
      const lifeQuotes = [
        "Life is what happens when you're busy making other plans. — John Lennon",
        "In the middle of every difficulty lies opportunity. — Albert Einstein",
        "The purpose of our lives is to be happy. — Dalai Lama",
        "Life is really simple, but we insist on making it complicated. — Confucius",
        "Your time is limited, so don't waste it living someone else's life. — Steve Jobs",
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. — Buddha",
        "The biggest adventure you can take is to live the life of your dreams. — Oprah Winfrey",
        "Life isn't about finding yourself. Life is about creating yourself. — George Bernard Shaw",
        "Difficulties in life are intended to make us better, not bitter. — Dan Reeves",
        "Keep smiling, because life is a beautiful thing and there's so much to smile about. — Marilyn Monroe"
      ];           

    let x = Math.floor((Math.random() * 10) + 1);
    const element = document.getElementById("options").value;
    document.getElementById("quote").innerText = element;
}