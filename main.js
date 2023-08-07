
// My Codes
// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  };
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  };
  
  pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum: specimenNum,
      dna: dna,
      // Method to simulate mutation
      mutate () {
        const randomIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase();
        // Make sure the new base is different from the current base
        while (this.dna[randomIndex] === newBase) {
          newBase = returnRandBase();
      }
      // Perform mutation
        this.dna[randomIndex] = newBase;
        return this.dna; 
      },
      compareDNA (pAequorObj) {
        const totalBases = this.dna.length;
        let identicalBases = 0;
  
        for (let i = 0; i < totalBases; i++) {
          if (this.dna[i] === pAequorObj.dna[i]) {
            identicalBases++;
          }
        }
    const percentageIdentical = (identicalBases / totalBases) * 100;
    console.log(`Specimen ${this.specimenNum} and Specimen ${pAequorObj.specimenNum} have ${percentageIdentical.toFixed(2)}% DNA in common.`);
      },
      willLikelySurvive () {
        const cgBasesCount = this.dna.filter(base => base === 'C' || base === 'G').length;
        const percentageCG = (cgBasesCount / this.dna.length) * 100;
        return percentageCG >= 60;
      },
      
// Method to get the complementary DNA strand

  complementStrand() {
    const complementMap = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
      };

    const complementaryStrand = this.dna.map(base => complementMap[base]);
      return complementaryStrand;
      }
    }
  };
  
  // Create 30 instances of pAequor that can survive

  const pAequorInstances = [];
  let specimenNum = 1;
  
  while (pAequorInstances.length < 30) {
    const newStrand = mockUpStrand();
    const newOrganism = pAequorFactory(specimenNum, newStrand);
  
    if (newOrganism.willLikelySurvive()) {
      pAequorInstances.push(newOrganism);
      specimenNum++;
    }
  }

// Print the DNA of each organism that can survive

    pAequorInstances.forEach((organism, index) => {
    console.log(`Organism ${index + 1} DNA:`, organism.dna);
  });

// Find the two most related instances of pAequor using .compareDNA()

let maxCommonPercentage = 0;
let mostRelatedPair = [];

for (let i = 0; i < pAequorInstances.length; i++) {
  for (let j = i + 1; j < pAequorInstances.length; j++) {
    const commonPercentage = pAequorInstances[i].compareDNA(pAequorInstances[j]);
    if (commonPercentage > maxCommonPercentage) {
      maxCommonPercentage = commonPercentage;
      mostRelatedPair = [pAequorInstances[i].specimenNum, pAequorInstances[j].specimenNum];
    }
  }
}

console.log('Most related pair:', mostRelatedPair);
  
/* 
Project Goals:

Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents.
Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and 
frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot 
survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate 
the DNA of P. aequor for your research team to study. 

  // Example usage:
  const organism1 = pAequorFactory(1, mockUpStrand());
  const organism2 = pAequorFactory(2, mockUpStrand());
  
  console.log('DNA of organism1:', organism1.dna);
  console.log('\nDNA of organism2:', organism2.dna);
  
  console.log('\nLikely to survive (organism1):', organism1.willLikelySurvive());
  console.log('\nLikely to survive (organism2):', organism2.willLikelySurvive());

  */
  
  
  
  
  
  
  
  
  
  
  