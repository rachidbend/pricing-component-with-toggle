

const toggle = () => {
    document.querySelector('#toggle').checked = true;

    const toggleMonths = trueOrFalse => {
        const months = Array.from(document.querySelectorAll('.card__price--month')) ;
        if (trueOrFalse) {
            months.forEach( e => {
                e.style.display = 'block';
            });
        } else {
            months.forEach(e => {
                e.style.display = 'none';
            });
        }
    }

    const toggleYear = trueOrFalse => {
        const years = Array.from(document.querySelectorAll('.card__price--year'));

        if (trueOrFalse) {
            years.forEach( e => {
                e.style.display = 'block';
            });
        } else {
            years.forEach( e => {
                e.style.display = 'none';
            });
        }

    }
    

    document.querySelector('#toggle').addEventListener('change', () => {
        let checkbox = document.querySelector('#toggle').checked;
        if (checkbox === true) {
            toggleMonths(true);
            toggleYear(false)
        } else if (checkbox === false) {
            toggleMonths(false);
            toggleYear(true);
        }
        


    });




}

toggle();