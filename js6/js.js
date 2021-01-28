/* class Circle {
    constructor(r) {
      this.r = r;
    }
    get radius() {
      return this.r;
    }
    set radius(r) {
      this.r = r;
    }
    get d() {
      return this.r * 2;
    }
    area() {
      return Math.PI * this.r * this.r;
    }
    circumference() {
      return Math.PI * this.r * 2;
    }
  }
  
  let circle = new Circle(5);
  console.log(circle.radius);
  console.log(circle.d);
  console.log(circle.area().toFixed(2));
  console.log(circle.circumference().toFixed(2)); */

/*   class Marker {
    constructor(c, p) {
      this.c = c;
      this.p = p;
    }
    get markerProps() {
      return [this.c, this.p];
    }
  
    set markerProps(newProps) {
      [this.c, this.p] = [...newProps];
    }
  
    print(line) {
      let t = document.getElementById("content");
      for (let i = 0; i < line.length; i++) {
        if (this.p != 0) {
          if (line[i] == " ") {
            this.p += 0.5;
          }
          t.innerHTML += line[i];
          t.style.color = this.c;
          this.p -= 0.5;
        } else {
          document.write("Marker is over");
          break;
        }
      }
    }
  }
  
  class FilledMarker extends Marker {
    fill(p) {
      if (p > 100) {
        p = 100;
      } else {
        this.p += p;
      }
    }
  }
  
  let marker = new FilledMarker("#838", 2);
  
  marker.fill(31);
  
  const l = `ффффффффффффффффффффф`;
  
  marker.print(l);
  document.body.setAttribute("style", "font-size: 18px; text-align: center;"); */


const mainDiv = document.getElementById("content");

const tableDiv = document.createElement("div");
tableDiv.setAttribute("id", "content__tableDiv");
tableDiv.className = "content__tableDiv";

const tableTag = document.createElement("table");
tableTag.setAttribute("id", "content__table");
tableTag.className = "content__table";

tableDiv.append(tableTag);
mainDiv.append(tableDiv);

class Employee {
  constructor(name, position, department, salary) {
    this.name = name;
    this.position = position;
    this.department = department;
    this.salary = salary;
  }
}
const arrEmp = [
  new Employee("John Doe", "Manager", "Sales", 5000),
  new Employee("Bill Freeman", "Manager", "Sales", 5000),
  new Employee("Uno Dirck", "Manager", "Sales", 5000),
  new Employee("Erick Rapid", "Manager", "Sales", 5000),
  new Employee("Chris Rea", "Manager", "Sales", 5000),
  new Employee("Tommy Lee", "Manager", "Sales", 5000),
  new Employee("Jeck Ward", "DevOps Engineer", "DevOps", 3500),
  new Employee(
    "Rick Depper",
    ".Net Senior Developer",
    "Desktop Solutions",
    4000
  ),
  new Employee("Neo Matrix", "Team Lead", "Desktop Solutions", 5000),
  new Employee(
    "Trinity Matrix",
    ".Net Senior Developer",
    "Desktop Solutions",
    4000
  ),
  new Employee(
    "Rick Grouy",
    ".Net Junior Developer",
    "Desktop Solutions",
    1000
  ),
  new Employee(
    "George McCalister",
    ".Net Junior Developer",
    "Desktop Solutions",
    1000
  ),
  new Employee(
    "Fred Durst",
    ".Net Junior Developer",
    "Desktop Solutions",
    1000
  ),
  new Employee(
    "Piter Parker",
    ".Net Middle Developer",
    "Desktop Solutions",
    4000
  ),
  new Employee(
    "Bro Somebody",
    ".Net Senior Developer",
    "Desktop Solutions",
    4000
  ),
  new Employee(
    "Merlin Mysterier",
    ".Net Middle Developer",
    "Desktop Solutions",
    4000
  ),
  new Employee(
    "Harry Potter",
    ".Net Senior Developer",
    "Desktop Solutions",
    4000
  ),
  new Employee(
    "Norton Commander",
    ".Net Middle Developer",
    "Desktop Solutions",
    4000
  ),
  new Employee("Elon Musk", ".Net Senior Developer", "Desktop Solutions", 4000)
];
class EmpTable {
  constructor(arr) {
    this.arr = arr;
  }
  getHtml() {
    const table = document.getElementById("content__table");
    const array = this.arr;
    const head = document.createElement("tr");
    head.setAttribute("style", "font-size: 18px;");
    const th1 = document.createElement("th");
    th1.textContent = "Name";
    const th2 = document.createElement("th");
    th2.textContent = "Position";
    const th3 = document.createElement("th");
    th3.textContent = "Department";
    const th4 = document.createElement("th");
    th4.textContent = "Salary ($)";
    head.append(th1);
    head.append(th2);
    head.append(th3);
    head.append(th4);
    table.append(head);
    for (let i in array) {
      let tr = document.createElement("tr");
      table.append(tr);
      for (let j in array[i]) {
        let td = document.createElement("td");
        td.textContent = array[i][j];
        tr.append(td);
        td.setAttribute("style", "padding: 5px 10px; font-size: 18px;");
      }
    }
    table.setAttribute("border", "2");
    table.setAttribute("bordercolor", "brown");
    table.setAttribute("width", "60%");
    table.setAttribute("style", "margin: auto; background-color: lightgrey;");
  }
}
const tableObj = new EmpTable(arrEmp);
tableObj.getHtml();