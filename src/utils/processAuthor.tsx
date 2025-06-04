import { slug as slugger } from "github-slugger";


const coAuthors = new Map();

coAuthors.set('Andrew Liu', 'https://www.linkedin.com/in/andrew-liu438/');
coAuthors.set('Zining Zhu', 'https://ziningzhu.github.io/');
coAuthors.set('Gerald Penn', 'https://www.cs.toronto.edu/~gpenn/');
coAuthors.set('Wenjie Lu', 'https://www.cs.toronto.edu/~luwenjie/');
coAuthors.set('Eric Corlett', 'https://www.cs.toronto.edu/~ecorlett/');
coAuthors.set('Victoria Ng', 'https://www.linkedin.com/in/victoriang1');
coAuthors.set('Erin E. Rees', 'https://grezosp.com/recherche/membres/membres-chercheurs/erin-e-rees/');
coAuthors.set('Simon De Montigny', 'https://www.linkedin.com/in/sdemontigny/')
coAuthors.set('Iryna Gurevych', 'https://www.informatik.tu-darmstadt.de/ukp/ukp_home/head_ukp/index.en.jsp')
coAuthors.set('Subhabrata Dutta', 'https://subha0009.github.io/')
coAuthors.set('Harish Tayyar Madabushi', 'https://www.harishtayyarmadabushi.com/')
coAuthors.set('Ahmed Elshabrawy', 'https://scholar.google.com/citations?user=dS7MEN8AAAAJ&hl=en')
coAuthors.set('Xingdi Yuan', 'https://xingdi-eric-yuan.github.io/')
coAuthors.set('Tong Wang', 'https://www.cs.toronto.edu/~tong/')
coAuthors.set('Hamidreza Saghir', 'https://hsaghir.github.io/')
coAuthors.set('Amir H. Abdi', 'https://amir-abdi.com/')

export function processAuthor (str, index, length) {
    if (index == length-2) {
        return author(str) + ' and ';
    } else if (index < length-1) {
        return author(str) + ', ';
    } else {
        return author(str) + '.';
    }
}

function author (str) {
    if (str == 'Jingcheng Niu') {
        return '<text class="inline-block text-lg font-medium text-skin-base underline">Jingcheng Niu</text>'
    } else {
        const url = coAuthors.get(str);
        if (url) {
            return `<a class="hover:text-skin-accent" href=${url}>${str}</a>`;
        } else {
            return str;
        }
    }
}