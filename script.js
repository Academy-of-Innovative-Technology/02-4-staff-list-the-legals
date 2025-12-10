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


let newTeacher = Admin.pop()
let newTeach= Admin.shift()
 let newT = Admin.push("")

let newoffice= Office.pop()
let newoffice2= Office.shift()
let newO = Office.push("")

let newCounselor= Counselor.pop()
let newCounselor2= Counselor.shift()
let newCC = Counselor.push("")

let newCTE= CTE.pop()
let newCTE2= CTE.shift()
let newC = CTE.push("Pelzer")

let newHistory= History.pop()
let newHistory2= History.shift()


let newMaths= Maths.pop()
let newMaths2= Maths.shift()


let newGym= Gym.pop()
let newGym2= Gym.shift()


let newDean= Dean.pop()
let newDean2= Dean.shift()


let newLanguage= Language.pop()
let newLanguage2= Language.shift()


let newScience= Science.pop()
let newScience2= Science.shift()


let newEnglish= English.pop()
let newEnglish2= English.shift()


let newSupport= Support.pop()
let newSupport2= Support.shift()


let newSSC= SSC.pop()
let newSSC2= SSC.shift()


































/////////////////////////////////////////////////////
//////// DO NOT EDIT BELOW THIS LINE ////////////////
/////////////////////////////////////////////////////



e("table").innerHTML = createTableCotents();