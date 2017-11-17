class Project{
    constructor(name){ console.log(`Constructing Project ${name}`) }
    getCount (){ return 45; }
};

class SWProject extends Project {
    constructor(name){ super(); console.log(`Constructing SWProject ${name}`) }
    getCount (){ return super.getCount(); }
}

let p = new SWProject('Maginus');
console.log(p.getCount());