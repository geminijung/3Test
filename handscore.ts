
function getHandScore(input:string):number {
     //ประกาศตัวแปรและเซ็ตค่าเริ่มต้น
     //ค่าแต้มของชนิดไพ่ที่สูงที่สุดที่สูงที่สุด
     let score:number = 0;
     //ค่าแต้มรวมของแต่ละชนิดของไพ่
     let scoreH:number = 0, scoreC:number = 0, scoreD:number = 0, scoreS:number = 0; 
     //อาเรย์สำหรับเก็บค่า input หลังจากแยกสตริงแล้ว
     let input_split:string[];
     //แยกสตริงจาก input ด้วยช่องว่าง 
     input_split = input.split(" ", 3);
     
     
     //ใช้เก็บตัวอักษรที่แยกออกมา
     let letter:string[] = ["","",""];  
     //ใช้เก็บตัวเลขที่แยกออกมา
     let num:string[] = ["","",""]; 
     
     //ทำการวนลูป เพื่อแยกตัวเลขออกจากตัวอักษรของอาเรย์ทั้ง 3
     for(let i:number = 0 ; i<3 ; i++){
          letter[i] = input_split[i].slice(0, input_split[i].search(/\d/));
          num[i] = input_split[i].replace(letter[i], '');
     }

     //เช็คก่อนว่าค่าคะแนนทั้ง 3 ไพ่เหมือนกันหรือไม่
     const allEqual = arr => arr.every( v => v === arr[0] )
     if(allEqual(num)){
          //ถ้าเหมือนกันแล้วค่าเป็น A-A-A หรือไม่
          if(num[0] == 'A'){
               CalculateScoreType(35,0);
          }else{
               CalculateScoreType(32.5,0);
          }
     }else{//กรณีที่ไพ่ไม่เหมือนกัน
          //ทำการคำนวณค่าของไพ่แต่ละชนิด
          for(let i:number = 0 ; i<3 ; i++){
               //เช็คหากตัวอักษรเป็นตัวเลขหรือไม่ 
               if( !isNaN(Number(num[i])) ){
                    CalculateScoreType(Number(num[i]),i);
               }else{
                    //ถ้าตัวเลขเป็นตัว J,Q,K
                    if( num[i] == 'J' || num[i] == 'Q' || num[i] == 'K'){
                         CalculateScoreType(10,i);   
                    }else if( num[i] == 'A' ){
                         CalculateScoreType(11,i);
                    }
               }
          }
     }
     //หาค่าที่มากที่สุดจากไพ่แต่ละชนิด
     score = Math.max(scoreH,scoreC,scoreD,scoreS);

     //ฟังก์ชัน แยกประเภทไพ่เพื่อเก็บแต้ม
     function CalculateScoreType(num:number, i:number) :void{
          if(letter[i] == 'H'){
               scoreH += num;
          }else if(letter[i] == 'C'){
               scoreC += num;
          }else if(letter[i] == 'D'){
               scoreD += num;
          }else if(letter[i] == 'S'){
               scoreS += num;
          }
     }

     return score
}

//console.log(getHandScore("S8 S10 CA"));
//console.log(getHandScore("SA SA SA"));