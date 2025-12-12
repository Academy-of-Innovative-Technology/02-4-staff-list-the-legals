//////// DO NOT EDIT BELOW THIS LINE ////////////////
/////////////////////////////////////////////////////

let
	Admin = ["Fowlkes", "Lynch", "Woodham", "Stahl", "Peter"],
	CTE = ["Alphonse", "Donahue", "Santana", "Vaduva", "Woods", "Shams", "Urena"],
	History = ["McQuilkin", "Amell", "Hablenko", "Schmidt", "Headlem", "Lucas", "Smith"],
	Counselor = ["Grant", "Weaver"],
	Maths = ["Freck", , "Ventimiglia"],
	Gym = ["Banta", "Proper", "Moll", "Murray"],
	Dean = ["Frazier", "Vaduva", "Mollison"],
	Language = ["Levystone", "Ortiz", "Stratman", "Vaduva", "Streeter", "Weaver"],
	Science = ["Koelsch", "Willet", "Lagana", "Fonrose"],
	English = ["Brown", "DelValle", "Duran", "Griszell", "King", "Fonrose", "Constant"],
	Office = ["Verley"],
	Support = ["Kabir", "Minto"],
	SSC = ["Stephine"];

const STAFF = [Admin, Office, Counselor, CTE, History, Maths, Gym, Dean, Language, Science, English, Support, SSC];

//////// DO NOT EDIT ABOVE THIS LINE ////////////////
/////////////////////////////////////////////////////

////////// MAKE YOUR UPDATES WITHIN THIS SECTION //// 

Admin.pop(); Admin.pop(); Admin.pop(); Admin.pop(); Admin.pop(); Admin.pop(); 

let newTeacher = Admin.pop()
let newTeach= Admin.shift()

 let newT = Admin.push("Drysdale");
let newTT = Admin.push("Simpkins");


let newoffice= Office.pop()
let newoffice2= Office.shift()
let newO = Office.push("Gardner")
let newOO= Office.push("Martinez")
let newOOO= Office.push("Tirado")
let newOOO0= Office.push("Valentin")


let newCounselor= Counselor.pop()
let newCounselor2= Counselor.shift()
let newCC= Counselor.push("Cooper")
let newCCC= Counselor.push("Desroches")
let newCCCC= Counselor.push("Molina")

let newCTE= CTE.pop()
let newCTE2= CTE.shift()
let newC = CTE.push("Pelzer");
let newC2 = CTE.push("Alphonse");
let newC3 = CTE.push("Pierre");
let newC4 = CTE.push("Sullivan");
let newC5 = CTE.push("Ramsawak");
let newC6 = CTE.push("Howell")


let newHistory= History.pop()
let newHistory2= History.shift()
let newH2 = History.push("Smith");
let newH3 = History.push("Urena");

let newMaths= Maths.pop()
let newMaths2= Maths.shift()
let newM = Maths.push("Wong");
let newM2 = Maths.push("Koelsch");
let newM3 = Maths.push("Freck");
let newM4 = Maths.push("Minto");
let newM5 = Maths.push("Forth");


let newGym= Gym.pop()
let newGym2= Gym.shift()
let newG = Gym.push("Banta");
let newGG = Gym.push("Mcalary");


let newDean= Dean.pop()
let newDean2= Dean.shift()
let newD = Dean.push("Frazier");
let newD2 = Dean.push("Mollison");

let newLanguage= Language.pop()
let newLanguage2= Language.shift()
let newL = Language.push("Weaver");
let newL2 = Language.push("Mott");
let newL3 = Language.push("Vallejo");

let newScience= Science.pop()
let newScience2= Science.shift()
let newS = Science.push("Davies");
let newSs = Science.push("Lynch");

let newEnglish= English.pop()
let newEnglish2= English.shift()
let newE = English.push("Griszell");
let newEE = English.push("Grant");
let newEEE = English.push("Gomez");
let newEEEE = English.push("Tavares");

let newSupport= Support.pop()
let newSupport2= Support.shift()
let newSu1 = Support.push("Sherman");
let newSu2 = Support.push("Rodriguez");
let newSu3 = Support.push("Steele");
let newSu4 = Support.push("Slater");
let newSu5 = Support.push("Kabri");
let newSu6 = Support.push("Shephard");
let newSu7 = Support.push("Ward");

let newSSC= SSC.pop()
let newSSC2= SSC.shift()
let newSS =	 SSC.push("Ricky");

































/////////////////////////////////////////////////////
//////// DO NOT EDIT BELOW THIS LINE ////////////////
/////////////////////////////////////////////////////



e("table").innerHTML = createTableCotents();