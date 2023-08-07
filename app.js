
// Returns a random DNA base
// Alternative Solutin to main.js Codecademy

const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases

  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  let currentDna = mockUpStrand();
  const pAequorFactor = (number, array) => {
    return {
      specimenNum: number,
      dna: array,
      mutate () {
       let randomIndex = Math.floor(Math.random() * this.dna.length)
       let newBase = returnRandBase();
        while (this.dna[randomIndex] === newBase) {
          newBase = returnRandBase();
        }
        this.dna[randomIndex] = newBase;
        return this.dna;
        },
      compareDna () {
        let example1 = this.dna;
        let example2 = currentDna;
        let score = 0;
        for (let j = 0; j < example1.length; j++) {
          for (let k = 0; k < example2.length; k++) {
            if (j === k && example1[j] === example2[k]) {
              score = score + 1;
            }
          }
        }
        console.log(`Specimen 1 and Specimen 2 have ${Math.floor(100 / 15 * score)}% DNA in common`)
      },
      willLikelySurvive () {
        let dnaScore = 0;
        const survivedStrand = [];
        for (let l = 0; l < this.dna.length; l++) {
          if (this.dna[l] === 'C' || this.dna[l] === 'G') {
           dnaScore = dnaScore + 1;
          }
        }
        if (Math.floor(100 / 15 * dnaScore) > 60) {
          survivedStrand.push(this.dna);
        }
        return console.log(survivedStrand);
      }
      }
    };
  
  console.log (pAequorFactor(2, mockUpStrand()));