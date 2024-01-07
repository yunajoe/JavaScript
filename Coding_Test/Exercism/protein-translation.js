const obj = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
};
const stopCodons = ["UAA", "UAG", "UGA"];
export const translate = (codon) => {
  let str = "";
  let arr = [];
  if (!codon) {
    return arr;
  }
  const lastIndex = codon.length - 1;

  for (let i = 0; i < codon.length; i++) {
    str += codon[i];
    if (i === lastIndex && str.length !== 3) {
      throw new Error("Invalid codon");
    }
    if ((i + 1) % 3 === 0) {
      if (stopCodons.includes(str)) {
        break;
      }
      if (!obj[str]) {
        throw new Error("Invalid codon");
      }
      arr.push(obj[str]);
      str = "";
    }
  }
  return arr;
};


// sol2) 
const protein = {
  Methionine: ["AUG"],
  Phenylalanine: ["UUU", "UUC"],
  Leucine: ["UUA", "UUG"],
  Serine: ["UCU", "UCC", "UCA", "UCG"],
  Tyrosine: ["UAU", "UAC"],
  Cysteine: ["UGU", "UGC"],
  Tryptophan: ["UGG"],
  Stop: ["UAA", "UAG", "UGA"],
};

export const translate = (str="") => {
  const codons = str.match(/.{1,3}/g) || []
  let result = [];
  for (const codon of codons) {
    const targetProtein = Object.keys(protein).find((key) =>
      protein[key].includes(codon)
    );
    if (targetProtein === "Stop") break
    if (!targetProtein) throw new Error("Invalid codon");
    result.push(targetProtein);
  }
  return result;
};
