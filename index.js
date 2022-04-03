var cart = JSON.parse(localStorage.getItem("Cart"))||[]
 var len = cart.length;
    console.log(len);
    document.querySelector("#item-count").innerText = len;


var user = JSON.parse(localStorage.getItem("login"))||[];
console.log(user)
if((user.length)!==0){
   document.querySelector("#top-address").innerText= user[0].City
   document.querySelector("#top-name").innerText= user[0].Name
}

function check_login(){
   console.log("In Check")
   if((user.length)!==0){
      swal({
         title: user[0].Name+" is alredy loged in !",
         text: "You clicked the button!",
         icon: "success",
         button: "Aww yiss!",
       });
   }else{
   document.querySelector("#login-check-pop").innerHTML=`
   <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
   <div class="modal-dialog">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="staticBackdropLabel">LOGIN OR SIGN UP</h5>
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class="modal-body">

           <div class="">

               <p class="text-center">
                   <a class="btn border btn-primary" data-bs-toggle="collapse" href="#log-in" role="button"
                       aria-expanded="false" aria-controls="collapseExample">
                       LOG IN
                   </a>
                   <span> OR </span>
                   <a class="btn border btn-primary" data-bs-toggle="collapse" href="#sign-up" role="button"
                       aria-expanded="false" aria-controls="collapseExample">
                       SIGN UP
                   </a>
               </p>
               <div class="collapse" id="log-in">
                   <div class="card card-body m-5">
                       <div id="form-login">
                           <div class="mb-3">
                               <label for="Input_Email" class="form-label">Email address</label>
                               <input type="email" class="form-control" id="Input_Email" aria-describedby="emailHelp">
                               <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                           </div>
                           <div class="mb-3">
                               <label for="InputPassword1" class="form-label">Password</label>
                               <input type="password" class="form-control" id="InputPassword">
                           </div>
                           <button id="btn-login" class="btn btn-primary">SIGN IN</button>
                       </div>
                   </div>
               </div>
       
               <div class="collapse" id="sign-up">
                   <div class="card card-body m-5">
                       <div id="form-signup">
                           <div class="mb-3">
                               <label for="Input1" class="form-label">Enter Name</label>
                               <input type="text" class="form-control" id="Input1" aria-describedby="emailHelp">
                               <div id="emailHelp" class="form-text">We'll never share your name with anyone else.</div>
                           </div>
                           
                           <div class="mb-3">
                               <label for="city" class="form-label">Your city</label>
                               <input type="email" class="form-control" id="city" aria-describedby="emailHelp">
                               <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                           </div>
                           <div class="mb-3">
                               <label for="Input2" class="form-label">Email address</label>
                               <input type="email" class="form-control" id="Input2" aria-describedby="emailHelp">
                               <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                           </div>
                           <div class="mb-3">
                               <label for="InputP1" class="form-label">Password</label>
                               <input type="password" class="form-control" id="InputP1">
                           </div>
                           <div class="mb-3">
                               <label for="InputP2" class="form-label">Conform Password</label>
                               <input type="password" class="form-control" id="InputP2">
                           </div>
                           <button id="btn-signup" class="btn btn-primary">SIGN IN</button>
                       </div>
                   </div>
               </div>
           </div>
       </div>
     </div>
   </div>
</div>
   `
   }

}

// Login & signup Logic

document.querySelector("#btn-signup").addEventListener("click", signup)

    function signup() {
        console.log("insign")
        var name = document.querySelector("#Input1").value;
        console.log(name)
        var city = document.querySelector("#city").value;
        var email = document.querySelector("#Input2").value;
        var pass = document.querySelector("#InputP1").value;
        var pass_con = document.querySelector("#InputP2").value;
        var user = JSON.parse(localStorage.getItem("user")) || []
        if (pass == pass_con) {
            obj = {
                Name: name,
                City: city,
                Email: email,
                Pass: pass,
            }
            user.push(obj)
            console.log(user)
            localStorage.setItem("user", JSON.stringify(user))
            swal({
                title: "Successfull Account Created!",
                text: "You clicked the button!",
                icon: "success",
                button: "Aww yiss!",
            });
        } else {
            swal({
                title: "Password not mached!",
                text: "You clicked the button!",
                icon: "error",
                button: "Opp's!",
            });
        }
    }


    document.querySelector("#btn-login").addEventListener("click", login)

    function login() {
        var email = document.querySelector("#Input_Email").value
        var pass = document.querySelector("#InputPassword").value
        var user = JSON.parse(localStorage.getItem("user")) || []
        
        user.map(function(element){

            if (element.Email == email && element.Pass==pass) {
                swal({
                    title: "Successfull Log In!",
                    text: "You clicked the button!",
                    icon: "success",
                    button: "Aww yiss!",
                });
                log=[]
                obj={
                    Name:element.Name,
                    City:element.City
                }
                log.push(obj)
                localStorage.setItem("login",JSON.stringify(log))
            } else {
                swal({
                    title: "Email and Password not mached!",
                    text: "You clicked the button!",
                    icon: "error",
                    button: "Opp's!",
                });
            }
        })
    }




// Shop_Pages_Logic

//--------------Anurag's Pages------------------------------------------
var fruitsVeg = [
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000150_19-fresho-onion.jpg",
      proName: "Fresho",
      detail: "Onion",
      rate: 4.1,
      select: "<option>5 kg - Rs.131</option>",
      price: 131,
      strike: "Rs.165",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 31% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40048457_8-fresho-potato-new-crop.jpg",
      proName: "Fresho",
      detail: "Potato",
      rate: 4.1,
      select: "<option>1 kg - Rs. 29 </option>",
      price: 29.00,
      strike: "Rs.43",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 42% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000204_16-fresho-tomato-local.jpg",
      proName: "Fresho",
      detail: "Tomato - Local",
      rate: 4,
      select: "<option>500 gm - Rs. 5</option>",
      price: 5.00,
      strike: "Rs.9",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000263_12-fresho-strawberry.jpg",
      proName: "Fresho",
      detail: "Strawberry",
      rate: 4.2,
      select: "<option>200 gm  - Rs. 55</option>",
      price: 55,
      strike: "Rs.70",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1203678_1-fresho-tender-coconut-medium.jpg",
      proName: "Fresho",
      detail: "Tender Coconut - Medium",
      rate: 4.3,
      select: "<option>4 * 1 pc- Rs.148</option>",
      price: 148,
      strike: "Rs.185",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 25% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
      proName: "Fresho",
      detail: "Cauliflower",
      rate: 4.5,
      select: "<option>1 pc - Rs. 13 </option>",
      price: 13,
      strike: "Rs.17",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-orange.jpg",
      proName: "Fresho",
      detail: "Carrot - Orange",
      rate: 4,
      select: "<option>1 kg  - Rs. 36</option>",
      price: 36,
      strike: "Rs.46",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000284_11-fresho-green-peas.jpg",
      proName: "Fresho",
      detail: "Green Peas",
      rate: 4.4,
      select: "<option>1 kg Pack - Rs. 99</option>",
      price: 99,
      strike: "Rs.123",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
  
  
    {
      off: "Get 40% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000201_15-fresho-tomato-hybrid.jpg",
      proName: "Fresho",
      detail: "Tomato - Hybrid",
      rate: 4,
      select: "<option>500 gm - Rs.7</option>",
      price: 7,
      strike: "Rs.11",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 33% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000142_16-fresho-ladies-finger.jpg",
      proName: "Fresho",
      detail: "Ladies Finger",
      rate: 4,
      select: "<option>1 kg- Rs. 29 </option>",
      price: 29,
      strike: "Rs.43",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000188_12-fresho-palak-cleaned-without-roots.jpg",
      proName: "Fresho",
      detail: "Palak - Cleaned, without roots",
      rate: 4,
      select: "<option>500 gm - Rs. 25</option>",
      price: 25,
      strike: "Rs.32",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 25% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000031_21-fresho-banana-yelakki.jpg",
      proName: "Fresho",
      detail: "Banana - Yelakki",
      rate: 4.2,
      select: "<option>1 kg - Rs. 83</option>",
      price: 83,
      strike: "Rs.110",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
  
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000102_17-fresho-cucumber.jpg",
      proName: "Fresho",
      detail: "Cucumber",
      rate: 4.1,
      select: "<option>1 kg Pouch- Rs.21</option>",
      price: 21,
      strike: "Rs.27",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get Rs 4 off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/1212555_1-bb-combo-fresho-cauliflower-1pc-approx-400-to-600gbb-home-vegetable-fruit-wash-500ml.jpg",
      proName: "bb Combo",
      detail: "Fresho Cauliflower 1pc )+BB Home wash",
      rate: 4.4,
      select: "<option>1 pc - Rs. 172 </option>",
      price: 172,
      strike: "Rs.176",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 18% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/1204548_3-bb-combo-fresho-palak-without-root-250gm-gowardhan-fresh-paneer-classic-block-200gm.jpg",
      proName: "bb Combo",
      detail: "Fresho Palak Without Root 250Gm + Gowardhan Fresh Paneer Classic Block 200Gm",
      rate: 4,
      select: "<option>1 Pack - Rs. 99</option>",
      price: 99,
      strike: "Rs.120",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get Rs 7 off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/1212559_1-bb-combo-fresho-broccoli-500-g-bb-home-vegetable-fruit-wash-500-ml.jpg",
      proName: "bb Combo",
      detail: "Fresho Broccoli 500 g + BB Home Vegetable & Fruit Wash 500 ml",
      rate: 4,
      select: "<option>1 Pack - Rs. 185</option>",
      price: 185,
      strike: "Rs.192",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
  
    {
      off: "Get 11% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/1212557_1-bb-combo-fresho-apple-red-deliciouswashington-4pcsbb-home-vegetable-fruit-wash-500ml.jpg",
      proName: "bb Combo",
      detail: "Fresho Apple-Red Delicious/Washington 4pcs+BB Home Vegetable & Fruit Wash 500ml",
      rate: 4.1,
      select: "<option>1 Pack- Rs.324</option>",
      price: 324,
      strike: "Rs.365",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get Rs 6 off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/1212556_1-bb-combo-fresho-bitter-gourd-500-g-bb-home-vegetable-fruit-wash-500-ml.jpg",
      proName: "bb Combo",
      detail: "Fresho Bitter Gourd 500 g + BB Home Vegetable & Fruit Wash 500 ml",
      rate: 4.4,
      select: "<option>1 pack - Rs. 176 </option>",
      price: 176,
      strike: "Rs.180",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 44% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/1200345_2-bb-combo-mango-banganpalli.jpg",
      proName: "bb Combo",
      detail: "Mango - Banganpalli",
      rate: 4.1,
      select: "<option>3 kg Pack - Rs. 420</option>",
      price: 420,
      strike: "Rs.750",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 25% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1203441_1-fresho-onion-1-kg-new-potato-1-kg-tomato-hybrid-1-kg.jpg",
      proName: "Fresho",
      detail: "Onion 1 kg + New Potato 1 kg + Tomato - Hybrid 1 kg",
      rate: 4.2,
      select: "<option>1 kg Pack - Rs. 68</option>",
      price: 68,
      strike: "Rs.90",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
  
    {
      off: "Get Rs 25 off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40218332_1-fresho-grapes-green.jpg",
      proName: "Fresho",
      detail: "Grapes- Green Seedless, Sonaka",
      rate: 4.1,
      select: "<option>500 gm - Rs.46</option>",
      price: 46,
      strike: "Rs.58",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40089741_2-fresho-beans-haricot.jpg",
      proName: "Fresho",
      detail: "Beans - Haricot",
      rate: 4.1,
      select: "<option>1 kg - Rs. 49 </option>",
      price: 49,
      strike: "Rs.61",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 27%  off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg",
      proName: "Fresho",
      detail: "Coriander Leaves",
      rate: 4.1,
      select: "<option>100 gm - Rs. 5</option>",
      price: 5,
      strike: "Rs.7",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 21% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
      proName: "Fresho",
      detail: "Capsicum - Green",
      rate: 4.2,
      select: "<option>500 gm - Rs. 25</option>",
      price: 25,
      strike: "Rs.31",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
  
    {
      off: "Get 34% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000273_16-fresho-mushrooms-button.jpg",
      proName: "Fresho",
      detail: "Mushrooms - Button",
      rate: 4.2,
      select: "<option>20 gm- Rs.45</option>",
      price: 45,
      strike: "Rs.69",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000066_25-fresho-cabbage.jpg",
      proName: "Fresho",
      detail: "Cabbage",
      rate: 4.1,
      select: "<option>1 pc - Rs. 13 </option>",
      price: 13,
      strike: "Rs.15",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 30% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000127_17-fresho-lemon.jpg",
      proName: "Fresho",
      detail: "Lemon",
      rate: 4,
      select: "<option>250 gm - Rs. 40</option>",
      price: 40,
      strike: "Rs.56",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000046_17-fresho-beetroot.jpg",
      proName: "Fresho",
      detail: "Beetroot",
      rate: 4.1,
      select: "<option>500 gm- Rs. 10</option>",
      price: 10,
      strike: "Rs.12",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
  
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/20000974_12-fresho-methiventhaya-keerai-cleaned-without-roots.jpg",
      proName: "Fresho",
      detail: "Methi/Venthaya Keerai - Cleaned, without roots",
      rate: 4.1,
      select: "<option>100gm- Rs.5</option>",
      price: 5,
      strike: "Rs.6",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000269_30-fresho-pomegranate.jpg",
      proName: "Fresho",
      detail: "Pomegranate",
      rate: 4.2,
      select: "<option>800 gm pouch - Rs. 169 </option>",
      price: 169,
      strike: "Rs.211",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000093_16-fresho-coconut-medium.jpg",
      proName: "Fresho",
      detail: "Coconut - Medium",
      rate: 4,
      select: "<option>1 pc - Rs. 24</option>",
      price: 24,
      strike: "Rs.29",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000063_20-fresho-broccoli.jpg",
      proName: "Fresho",
      detail: "Broccoli",
      rate: 4.1,
      select: "<option>250 gm - Rs. 26</option>",
      price: 26,
      strike: "Rs.32",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
  
    {
      off: "Get Rs 46 off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000599_12-fresho-cucumber-english.jpg",
      proName: "Fresho",
      detail: "Cucumber - English",
      rate: 4.2,
      select: "<option>500 gm - Rs.27</option>",
      price: 27,
      strike: "Rs.34",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 35% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000117_17-fresho-ginger.jpg",
      proName: "Fresho",
      detail: "Ginger",
      rate: 4.2,
      select: "<option> 100 gm - Rs. 5 </option>",
      price: 5,
      strike: "Rs.7",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 23% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000164_14-fresho-radish-white.jpg",
      proName: "Fresho",
      detail: "Radish - White",
      rate: 4,
      select: "<option>1 kg - Rs. 20</option>",
      price: 20,
      strike: "Rs.27",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000333_14-fresho-chilli-green-long-medium.jpg",
      proName: "Fresho",
      detail: "Chilli - Green Long, Medium",
      rate: 4.1,
      select: "<option>1 kg- Rs. 90</option>",
      price: 90,
      strike: "Rs.113",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "fruitsVeg"
    },
  
  ];
  
  
  var grainsMasala = [
    {
      off: "Get 8% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/30006887_6-aashirvaad-atta-whole-wheat.jpg",
      proName: "Aashirvaad",
      detail: "Atta/Godihittu - Whole Wheat",
      rate: 4.1,
      select: "<option>1 kg Pouch- Rs.54</option>",
      price: 54.54,
      strike: "Rs.59",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 31% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/20001214_15-bb-royal-sona-masoori-raw-rice.jpg",
      proName: "BB Royal",
      detail: "Sona Masoori Raw Rice/Akki",
      rate: 4.1,
      select: "<option>25 kg - Rs. 1199 </option>",
      price: 1199.00,
      strike: "Rs.1750",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 40% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40030808_10-bb-royal-cuminjeera-whole.jpg",
      proName: "BB Royal",
      detail: "Cumin/Jeera/Jeerige - Whole",
      rate: 4,
      select: "<option>1 kg Pack - Rs. 299</option>",
      price: 299.00,
      strike: "Rs.500",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 31% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40075897_12-bb-royal-sona-masoori-rice-raw-rice-super-premium.jpg",
      proName: "BB Royal",
      detail: "Sona Masoori Rice/Akki Raw Rice/Akki - Super Premium",
      rate: 4.2,
      select: "<option>10 kg Pack - Rs. 520</option>",
      price: 520,
      strike: "Rs.750",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 30% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000423_12-bb-royal-sooji-ordinarybombay-rava.jpg",
      proName: "BB Royal",
      detail: "Sooji Ordinary/Bombay Rava",
      rate: 4.3,
      select: "<option>1 kg Pouch- Rs.42</option>",
      price: 42,
      strike: "Rs.60",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 2% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1204455_1-fortune-sunflower-refined-oil-sun-lite.jpg",
      proName: "Fortune",
      detail: "Sunflower Refined Oil - Sun Lite",
      rate: 4.5,
      select: "<option>3 * 910g - Rs. 645 </option>",
      price: 645,
      strike: "Rs.660",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 30% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000407_12-bb-royal-refined-sugar-sulphurless.jpg",
      proName: "BB Royal",
      detail: "BB Royal Refined Sugar (Sulphurless)/Sakkare",
      rate: 4,
      select: "<option>5 kg Pack - Rs. 211</option>",
      price: 211,
      strike: "Rs.300",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 26% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000446_17-bb-royal-peanutsmungaphalishengdana-raw.jpg",
      proName: "BB Royal",
      detail: "Peanuts/Kadalekayi - Raw",
      rate: 4.4,
      select: "<option>1 kg Pack - Rs. 170</option>",
      price: 170,
      strike: "Rs.230",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
  
  
    {
      off: "Get 29% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40042841_7-bb-royal-toor-dalarhar-dal-desi.jpg",
      proName: "BB Royal",
      detail: "Toor Dal/Togari Bele - Desi",
      rate: 4,
      select: "<option>5 kg Pouch- Rs.600</option>",
      price: 600,
      strike: "Rs.850",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Save Rs 6 ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/148674_2-nandini-pure-ghee.jpg",
      proName: "Nandini",
      detail: "Pure Ghee/Tuppa",
      rate: 4.2,
      select: "<option>200 ml - Rs. 103 </option>",
      price: 103,
      strike: "Rs.109",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 39% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40075469_9-bb-royal-organic-turtoor-dal.jpg",
      proName: "BB Royal",
      detail: "Organic - Toor Dal/Togari Bele",
      rate: 4,
      select: "<option>2 kg Pack - Rs. 245</option>",
      price: 245,
      strike: "Rs.399",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 4% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/274120_3-sunpure-refined-sunflower-oil.jpg",
      proName: "Sunpure",
      detail: "Refined - Sunflower Oil",
      rate: 4.2,
      select: "<option>1 L Pack - Rs. 225</option>",
      price: 225,
      strike: "Rs.230",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
  
    {
      off: "Get 16% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/244096_5-madhur-sugar-refined.jpg",
      proName: "Madhur",
      detail: "Sugar/Sakkare - Refined",
      rate: 4.1,
      select: "<option>1 kg Pouch- Rs.50</option>",
      price: 50,
      strike: "Rs.60",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 7% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/241600_5-tata-salt-iodized.jpg",
      proName: "Tata Salt",
      detail: "Iodized salt",
      rate: 4.5,
      select: "<option>1 kg - Rs. 22 </option>",
      price: 22,
      strike: "Rs.24",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 55% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000549_14-bb-popular-almondbadam-californian-giri.jpg",
      proName: "BB Popular",
      detail: "Almond/Badam - Californian, Giri",
      rate: 4,
      select: "<option>500 gm Pack - Rs. 340</option>",
      price: 340,
      strike: "Rs.750",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 24% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/30005417_8-bb-popular-sugar.jpg",
      proName: "BB Popular",
      detail: "Sugar/Sakkare",
      rate: 4,
      select: "<option>1 kg Pack - Rs. 208</option>",
      price: 208,
      strike: "Rs.275",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
  
    {
      off: "Get Rs 11 off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1204461_1-fortune-mustard-oil-kachi-ghani.jpg",
      proName: "Fortune",
      detail: "Mustard Oil - (Kachi Ghani)",
      rate: 4.1,
      select: "<option>1 kg Pouch- Rs.699</option>",
      price: 699,
      strike: "Rs.710",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 44% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40021402_7-bb-popular-cashewkaju-whole.jpg",
      proName: "BB Popular",
      detail: "Cashew/Godambi - Whole",
      rate: 4.4,
      select: "<option>1 kg - Rs. 838 </option>",
      price: 838,
      strike: "Rs.1500",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 23% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000549_14-bb-popular-almondbadam-californian-giri.jpg",
      proName: "Aashirvaad",
      detail: "Atta With Multigrains - High Fibre, Soft Rotis",
      rate: 4.2,
      select: "<option>10 kg Pack - Rs. 499</option>",
      price: 499,
      strike: "Rs.645",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 24% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40236231_1-aashirvaad-select-sharbati-atta-100-mp-whole-wheat-rotis-stay-softer-for-longer.jpg",
      proName: "Aashirvaad",
      detail: "Select Sharbati Atta - 100% MP Whole Wheat",
      rate: 4.2,
      select: "<option>10 kg Pack - Rs. 459</option>",
      price: 459,
      strike: "Rs.600",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
  
    {
      off: "Get Rs 25 off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/1204454_1-fortune-refined-oil-rice-bran.jpg",
      proName: "Fortune",
      detail: "Refined Oil - Rice Bran",
      rate: 4.1,
      select: "<option>3 * 1L Pouch- Rs.675</option>",
      price: 675,
      strike: "Rs.700",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get Rs 50 off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/1203528_4-saffola-tasty-pro-fitness-conscious-edible-oil.jpg",
      proName: "Saffola",
      detail: "Tasty - Pro Fitness Conscious Edible Oil",
      rate: 4.1,
      select: "<option>3 * 1L - Rs. 580 </option>",
      price: 580,
      strike: "Rs.630",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get Rs 6 off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/30000590_2-india-gate-basmati-rice-feast-rozzana.jpg",
      proName: "India Gate",
      detail: "Basmati Rice/Basmati Akki - Feast Rozzana",
      rate: 4.1,
      select: "<option>1 kg Pack - Rs. 100</option>",
      price: 100,
      strike: "Rs.106",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 10% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/241601_6-tata-salt-lite-15-low-sodium-iodised-salt.jpg",
      proName: "Tata Salt",
      detail: "Lite - 15% Low Sodium Iodised Salt",
      rate: 4.2,
      select: "<option>1 kg Pack - Rs. 36</option>",
      price: 36,
      strike: "Rs.40",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
  
    {
      off: "Get Rs 94 off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/147493_14-saffola-gold-refined-cooking-oil-blended-rice-bran-sunflower-oil-helps-keeps-heart-healthy.jpg",
      proName: "Saffola",
      detail: "Gold Refined Cooking oil | Blended Rice Bran & Sunflower oil",
      rate: 4.2,
      select: "<option>5L Jar- Rs.1236</option>",
      price: 1236,
      strike: "Rs.1330",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get Rs 31 off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/30010365_11-bb-popular-masoor-dal.jpg",
      proName: "BB Popular",
      detail: "Masoor Dal/Mysore Bele",
      rate: 4.1,
      select: "<option>1 kg pouch - Rs. 103 </option>",
      price: 103,
      strike: "Rs.150",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get Rs 19 off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/255849_5-daawat-basmati-rice-rozana-gold.jpg",
      proName: "Daawat",
      detail: "Basmati Rice/Basmati Akki - Rozana Gold",
      rate: 4,
      select: "<option>1 kg Pack - Rs. 79</option>",
      price: 79,
      strike: "Rs.99",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get Rs 6 off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/280154_2-india-gate-basmati-rice-dubar.jpg",
      proName: "India Gate",
      detail: "Basmati Rice/Basmati Akki - Dubar",
      rate: 4.5,
      select: "<option>1 kg Pack - Rs. 115</option>",
      price: 115,
      strike: "Rs.122",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
  
    {
      off: "Get 39% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/1216109_3-24-mantra-organic-jaggery-powder.jpg",
      proName: "24 Mantra",
      detail: "Organic Jaggery Powder",
      rate: 4.1,
      select: "<option>2 * 500gm- Rs.97</option>",
      price: 97,
      strike: "Rs.160",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 27% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/40101870_10-bb-royal-organic-cashewkaju-whole-bold.jpg",
      proName: "BB Royal",
      detail: "Organic - Cashew/Godambi Whole Bold",
      rate: 4.1,
      select: "<option>500gm pouch - Rs. 549 </option>",
      price: 549,
      strike: "Rs.750",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/100448228_7-24-mantra-organic-whole-wheat-atta.jpg",
      proName: "24 Mantra",
      detail: "Organic Whole Wheat Atta",
      rate: 4,
      select: "<option>5 kg Pack - Rs. 249</option>",
      price: 249,
      strike: "Rs.310",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get Rs 6 off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/280154_2-india-gate-basmati-rice-dubar.jpg",
      proName: "India Gate",
      detail: "Basmati Rice/Basmati Akki - Dubar",
      rate: 4.1,
      select: "<option>1 kg Pack - Rs. 116</option>",
      price: 116,
      strike: "Rs.122",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
  
    {
      off: "Get Rs 46 off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/1203530_3-saffola-active-pro-weight-watchers.jpg",
      proName: "Saffola",
      detail: "Active - Pro Weight Watchers",
      rate: 4.1,
      select: "<option>3 * 1L - Rs.539</option>",
      price: 539,
      strike: "Rs.585",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 80 Rs off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/100647222_11-fortune-refined-oil-rice-bran.jpg",
      proName: "Fortune",
      detail: "Refined Oil - Rice Bran",
      rate: 4.2,
      select: "<option> 5L Can - Rs. 1100 </option>",
      price: 1100,
      strike: "Rs.1180",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 22% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/1211931_1-bb-royal-ponni-boiled-rice-10-kg-bag-12-17-months-old-mp-sharbati-atta-5-kg.jpg",
      proName: "BB Royal",
      detail: "Ponni Boiled Rice  MP Sharbati Atta",
      rate: 4,
      select: "<option>10 kg Pack - Rs. 799</option>",
      price: 799,
      strike: "Rs.1030",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get Rs 27 off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/40203891_1-bb-royal-organic-chia-seeds.jpg",
      proName: "BB Royal",
      detail: "Organic - Chia seeds",
      rate: 4.1,
      select: "<option>1 kg Pack - Rs. 448</option>",
      price: 448,
      strike: "Rs.475",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
  
    {
      off: "Get 22% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/255848_10-daawat-basmati-rice-super.jpg",
      proName: "Daawat",
      detail: "Basmati Rice/Basmati Akki - Super",
      rate: 4.2,
      select: "<option>1Kg - Rs.144</option>",
      price: 144,
      strike: "Rs.185",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 11 Rs off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/243336_2-india-gate-basmati-rice-classic.jpg",
      proName: "India Gate",
      detail: "Basmati Rice/Basmati Akki - Classic",
      rate: 4.3,
      select: "<option> 1 kg - Rs. 207 </option>",
      price: 207,
      strike: "Rs.218",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 34% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/10000561_11-bb-royal-peasmatar-green.jpg",
      proName: "BB Royal",
      detail: "BB Royal Peas/Matar",
      rate: 4,
      select: "<option>1 kg Pack - Rs. 115</option>",
      price: 115,
      strike: "Rs.160",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
    {
      off: "Get 47% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/40186968_1-bb-royal-organic-jaggery-powder.jpg",
      proName: "BB Royal",
      detail: "Organic Jaggery/Bella Powder",
      rate: 4,
      select: "<option> 500gm Pack - Rs. 50</option>",
      price: 50,
      strike: "Rs.95",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "grainsMasala"
    },
  
  
  ];
  //-----------------Harish's Pages----------------------------------------
  var bakeryCake = [
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40003150_3-milky-mist-paneer-premium-fresh.jpg",
      proName: "Milkymist",
      detail: "Paneer - Premium Fresh",
      // rate:"3.9✰",
      rate: 3.9,
      select: "<option>500gm Pouch- Rs.213.00</option>",
      price: 213.00,
      strike: "Rs.265",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "bakeryCake"
    },
    {
      off: "Get 4% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/242671_1-nandini-goodlife-toned-milk.jpg",
      proName: "Nandini",
      detail: "Goodlife - Toned Milk",
      // rate:"4.1✰",
      rate: 4.1,
      select: "<option>500ml Pouch</option>",
      price: 26.00,
      strike: "MRP.Rs.26",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "bakeryCake"
    },
    {
      off: "Save Rs 5 ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1200163_4-amul-butter-pasteurized.jpg",
      proName: "Amul",
      detail: "Butter - Pasteurized",
      // rate:"4.2✰",
      rate: 4.2,
      select: "<option>2x100gm Multi Pack</option>",
      price: 95.00,
      strike: "MRP.Rs.100",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "bakeryCake"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1204360_1-fresho-bread-whole-wheat-chemical-free-400g-eggs-table-tray-30pcs.jpg",
      proName: "Fresho",
      detail: "Bread - Whole Wheat, Chemical Free 400G + Eggs - Table Tray 30pcs",
      // rate:"4.2✰",
      rate: 4.2,
      select: "<option>combo 2 items</option>",
      price: 197.05,
      strike: "MRP.Rs.249",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "bakeryCake"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40025355_6-fresho-whole-wheat-bread-safe-preservative-free.jpg",
      proName: "Fresho",
      detail: "Whole Wheat Bread - Safe, Preservative Free",
      // rate:"3.9✰",
      rate: 3.9,
      select: "<option>400gm Pouch- Rs.37.05</option>",
      price: 37.05,
      strike: "MRP.Rs.39",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "bakeryCake"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1204352_1-fresho-sandwich-bread-white-chemical-free-400g-eggs-regular-6pcs.jpg",
      proName: "Fresho",
      detail: "Bread - Whole Wheat, Chemical Free 400G + Eggs - Regular 6pcs",
      // rate:"3.9✰",
      rate: 3.9,
      select: "<option>combo 2 items</option>",
      price: 73.00,
      strike: "MRP.Rs.89",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "bakeryCake"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1209046_3-amul-taaza-homogenised-toned-milk.jpg",
      proName: "Amul",
      detail: "Homogenised Toned Milk",
      // rate:"4.2✰",
      rate: 4.2,
      select: "<option>2x1L Multipack-Rs.124.71</option>",
      price: 124.71,
      strike: "MRP.Rs.132",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "bakeryCake"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40137716_10-id-natural-paneer.jpg",
      proName: "id-Fresho",
      detail: "Soft & Creamy Paneer",
      // rate:"3.9✰",
      rate: 3.9,
      select: "<option>200gm Pouch- Rs.80.80</option>",
      price: 80.80,
      strike: "MRP.Rs.110",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "bakeryCake"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1202761_2-amul-cheese-slices.jpg",
      proName: "Amul",
      detail: "Cheese Slices",
      // rate:"4.2✰",
      rate: 4.2,
      select: "<option>2x200gm Multipack- Rs.235.20</option>",
      price: 235.20,
      strike: "MRP.Rs.260",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "bakeryCake"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1207078_2-amul-masti-buttermilk-spice.jpg",
      proName: "Amul",
      detail: "Masti Buttermilk - Spice",
      // rate:"4.2✰",
      rate: 4.2,
      select: "<option>2x1L Multipack-Rs.93.70</option>",
      price: 93.70,
      strike: "MRP.Rs.100",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "bakeryCake"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40003150_3-milky-mist-paneer-premium-fresh.jpg",
      proName: "Milkymist",
      detail: "Paneer - Premium Fresh",
      // rate:"3.9✰",
      rate: 3.9,
      select: "<option>500gm Pouch- Rs.213.00</option>",
      price: 213.00,
      strike: "MRP.Rs.265",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "bakeryCake"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40045943_1-amul-butter-pasteurised.jpg",
      proName: "Amul",
      detail: "Butter - Pasteurised",
      // rate:"4.2✰",
      rate: 4.2,
      select: "<option>200gm Tub</option>",
      price: 96.00,
      strike: "MRP.Rs.102",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "bakeryCake"
    },
  
  ];
  
  
  var beverages = [
    {
      off: "Save Rs 56 ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/102871_10-red-label-tea.jpg",
      proName: "Red-label",
      detail: "Tea",
      rate: 4.1,
      select: "<option>1kg- Rs.514.00</option>",
      price: 514.00,
      strike: "MRP.Rs.570",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "beverages"
    },
    {
      off: "Get 4% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/162275_15-bournvita-chocolate-health-drink-bournvita.jpg",
      proName: "Bournvita",
      detail: "Chocolate Health Drink - Bournvita",
      rate: 4.2,
      select: "<option>75gm Pouch</option>",
      price: 28.08,
      strike: "MRP.Rs.30",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "beverages"
    },
    {
      off: "Get 23% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1200127_7-coca-cola-coke-zero-soft-drink-no-sugar.jpg",
      proName: "Coca Cola",
      detail: "Coke Zero Soft Drink - No Sugar",
      rate: 4.2,
      select: "<option>6x300ml Multi Pack Rs-186</option>",
      price: 186,
      strike: "MRP.Rs.240",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "beverages"
    },
    {
      off: "Get 15% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1204484_1-taj-mahal-tea.jpg",
      proName: "TajMahal",
      detail: "Tea",
      rate: 4.2,
      select: "<option>2x500gm Multipack-Rs.671.50</option>",
      price: 671.50,
      strike: "MRP.Rs.790",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "beverages"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/240065_14-tata-tea-gold-tea.jpg",
      proName: "Tata Tea Gold",
      detail: "Tea",
      rate: 4.2,
      select: "<option>1kg Rs.470.00</option>",
      price: 470,
      strike: "MRP.Rs.610",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "beverages"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/266579_23-bru-instant-coffee.jpg",
      proName: "Bru",
      detail: "Instant Coffee",
      rate: 4.2,
      select: "<option>200gm Pouch-Rs.297.50</option>",
      price: 297.50,
      strike: "MRP.Rs.350",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "beverages"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40071513_8-horlicks-health-nutrition-drink-classic-malt.jpg",
      proName: "Horlicks",
      detail: "Health & Nutrition Drink - Classic Malt",
      rate: 4.2,
      select: "<option>750gm- Rs.306.00</option>",
      price: 306,
      strike: "MRP.Rs.340",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "beverages"
    },
    {
      off: "Get 21% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40032982_8-thums-up-soft-drink.jpg",
      proName: "Thums Up",
      detail: "Soft Drink",
      rate: 4.1,
      select: "<option>1.75lit Rs.75.70</option>",
      price: 75.70,
      strike: "MRP.Rs.90.00",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "beverages"
    },
    {
      off: "Get 15% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/266596_6-3-roses-dust-tea.jpg",
      proName: "3 Roses",
      detail: "Dust Tea",
      rate: 4.2,
      select: "<option>250gm Rs.161.50</option>",
      price: 161.50,
      strike: "MRP.Rs.190",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "beverages"
    },
    {
      off: "Get 11% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/186070_8-cothas-coffee-.jpg",
      proName: "Cothas Coffee",
      detail: "Coffee - Regular",
      rate: 4.3,
      select: "<option>500gm puch RS.249.00</option>",
      price: 249.00,
      strike: "MRP-Rs.280",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "beverages"
    },
    {
      off: "Get 5% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/288068_6-kinley-sparkling-water-club-soda.jpg",
      proName: "Kinley",
      detail: "Sparkling Water - Club Soda",
      rate: 4.2,
      select: "<option>1.25L PET Bottle-Rs.28.50</option>",
      price: 28.50,
      strike: "MRP.Rs.30",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "beverages"
    },
    {
      off: "Get 13% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/1203207_1-tropicana-100-orange-juice.jpg",
      proName: "Tropicana",
      detail: "100% Orange Juice",
      rate: 3.8,
      select: "<option>3x1L Multipack-Rs.366.00</option>",
      price: 366,
      strike: "MRP.Rs.420",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "beverages"
    },
  
  ];
  //---------------------Vishakha's Pages--------------------------------
  
  var cleaningHouse = [
    {
      off: "Get 10% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1207190_6-harpic-original-disinfectant-toilet-cleaner-liquid.jpg",
      proName: "Harpic",
      detail: "Disinfectant Toilet Cleaner Liquid,Orininal",
      rate: 4.2,
      select: "500ml, Rs.88.00",
      price: 524.01,
      strike: "Rs.535",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "cleaningHouse"
    },
    {
      off: "Get 22% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1207311_7-surf-excel-matic-liquid-detergent-front-load.jpg",
      proName: "Surf Excel",
      detail: "Matic Liquid Detergent - Front Load",
      rate: 4.3,
      select: "2L Pouch, Rs.346.00",
      price: 692,
      strike: "Rs.899",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "cleaningHouse"
    },
    {
      off: "Get 14% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1207195_4-lizol-disinfectant-floor-cleaner-liquid-citrus-kills-999-germs.jpg",
      proName: "Lizol",
      detail: "Disinfectant Surface & Floor Cleaner Liquid, Citrus",
      rate: 4.4,
      select: "2 L, Rs.300.00",
      price: 525.01,
      strike: "Rs.615",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "cleaningHouse"
    },
    {
      off: "Get 13% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/306160_21-vim-dishwash-bar-lemon.jpg",
      proName: "Vim",
      detail: "Dishwash Bar - Lemon",
      rate: 4.5,
      select: "300 g Wrapper -Rs.25.25",
      price: 45.43,
      strike: "Rs.52",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "cleaningHouse"
    },
    {
      off: "Get 5% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40137710_10-bb-home-oxo-biodegradable-garbage-bag-medium-blue.jpg",
      proName: "BB Home",
      detail: "Oxo-Biodegradable Garbage Bags - Medium, Blue",
      rate: 4.2,
      select: "1 Pc Rs 61.75",
      price: 61.75,
      strike: "Rs.65",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "cleaningHouse"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1204352_1-fresho-sandwich-bread-white-chemical-free-400g-eggs-regular-6pcs.jpg",
      proName: "Fresho",
      detail: "Bread - Whole Wheat, Chemical Free 400G + Eggs - Regular 6pcs",
      rate: 3.9,
      select: "combo 2 items",
      price: 73.00,
      strike: "Rs.89",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "cleaningHouse"
    },
    {
      off: "Get 11% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1201635_8-harpic-disinfectant-bathroom-cleaner-liquid-lemon.jpg",
      proName: "Harpic",
      detail: "Disinfectant Bathroom Cleaner Liquid, Lemon",
      rate: 4.2,
      select: "500ml, Rs.175.76",
      price: 175.76,
      strike: "Rs.198",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "cleaningHouse"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/230745_18-comfort-after-wash-morning-fresh-fabric-conditioner.jpg",
      proName: "Comfort",
      detail: "After Wash Morning Fresh Fabric Conditioner",
      rate: 4.8,
      select: "500ml, Rs.188.00",
      price: 188,
      strike: "Rs.225",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "cleaningHouse"
    },
    {
      off: "save Rs.33 ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40211319_1-ariel-matic-liquid-detergent-front-load.jpg",
      proName: "Ariel",
      detail: "Matic Liquid Detergent - Front Load",
      rate: 4.3,
      select: "2Kg  Rs.381.00",
      price: 381,
      strike: "Rs.415",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "cleaningHouse"
    },
    {
      off: "Get 18% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/285250_16-comfort-after-wash-anti-bacterial-fabric-conditioner.jpg",
      proName: "Comfort",
      detail: "After Wash Anti Bacterial Fabric Conditioner",
      rate: 4.3,
      select: "860ml-Rs192",
      price: 192,
      strike: "Rs.235",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "cleaningHouse"
    },
    {
      off: "Get 18% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40106413_9-ariel-matic-front-load-detergent-washing-powder.jpg",
      proName: "Arial",
      detail: "Matic Front Load Detergent Washing Powder",
      rate: 4.6,
      select: "5kg , Rs.1027.00",
      price: 1027,
      strike: "Rs.1250",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "cleaningHouse"
    },
    {
      off: "Get 11% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/264009_13-tide-plus-detergent-washing-powder-extra-power-jasmine-rose.jpg",
      proName: "Tide",
      detail: "Plus Detergent Washing Powder - Extra Power Jasmine & Rose",
      rate: 4.5,
      select: "1kg, Rs.88.00",
      price: 118,
      strike: "Rs.132",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "cleaningHouse"
    },
    {
      off: "Get 11% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/40175061_10-bb-home-premium-soft-grass-broomphool-jhadu.jpg",
      proName: "BB Home",
      detail: "Premium Soft Grass Broom/Phool Jhadu",
      rate: 4.4,
      select: "1 Pc Rs.225",
      price: 225,
      strike: "Rs.500",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "cleaningHouse"
    },
    {
      off: "Get 46% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/40172986_12-bb-home-spin-mop-bucket-360-degree-with-2-refills.jpg",
      proName: "BB Home",
      detail: "Spin Mop Bucket With 360 Degree Rotation & 2 Refills - Used For Deep Cleaning, Blue",
      rate: 4.2,
      select: "1 pc Rs.699",
      price: 699,
      strike: "Rs.1200",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "cleaningHouse"
    },
    {
      off: "Get 15% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/1214683_1-ariel-detergent-washing-powder-matic-front-load-2kg-matic-3-in-1-pods-detergent-357g.jpg",
      proName: "Ariel",
      detail: "Detergent Washing Powder-Matic Front Load 2kg + Matic 3-in-1 PODs Detergent 357g",
      rate: 4,
      select: "1 Kg, Rs.88.00",
      price: 843.11,
      strike: "Rs.991",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "cleaningHouse"
    },
    {
      off: "Get 46% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/2000047_4-tide-naturals-detergent-powder-lemon-chandan.jpg",
      proName: "Tide",
      detail: "Naturals Detergent Powder - Lemon & Chandan",
      rate: 4.3,
      select: "500 g-Rs 35.15",
      price: 35.15,
      strike: "Rs.37",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "cleaningHouse"
    },
  ];
  
  
  var kitchenGarden = [
    {
      off: "Get 19% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/240100_9-duracell-ultra-alkaline-battery-aa.jpg",
      proName: "Duracell",
      detail: "Ultra Alkaline Battery AA",
      rate: 4.2,
      select: "4 Pcs",
      price: 130,
      strike: "Rs.160",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "kitchenGarden"
    },
    {
      off: "SAVE Rs 295✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/30005108_18-pedigree-dry-dog-food-chicken-vegetables-for-adult-dogs.jpg",
      proName: "Pedigree",
      detail: "Dry Pet Food - For Adult Dogs, Chicken & Vegetables",
      rate: 4.4,
      select: "15kg -Rs2655.00",
      price: 2655,
      strike: "Rs.2950",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "kitchenGarden"
    },
    {
      off: "Get 51% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40186000_4-bb-home-stainless-steel-ghee-pot-high-quality-durable.jpg",
      proName: "BB Home",
      detail: "Stainless Steel Ghee Pot - High Quality, Durable",
      rate: 4.3,
      select: "400ml -Rs229.00",
      price: 229,
      strike: "Rs.460",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "kitchenGarden"
    },
    {
      off: "Get 39% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1214644_1-philips-led-bulb-10-watt-cool-day-light-ace-saver-base-b22.jpg",
      proName: "Philips",
      detail: "LED Bulb - 10 Watt, Cool Day Light, Ace Saver Base B22",
      rate: 4.2,
      select: "2x1 pc Multipack-Rs242.50",
      price: 242.50,
      strike: "Rs.400",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "kitchenGarden"
    },
    {
      off: "Get 44% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40185972_5-bb-home-stainless-steel-pav-bhajiidli-plate-oval-shape.jpg",
      proName: "BB Home",
      detail: "Stainless Steel Pav Bhaji/Idli Plate - Oval Shape",
      rate: 4,
      select: " pc- Rs269",
      price: 269,
      strike: "Rs.479",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "kitchenGarden"
    },
    {
      off: "SAVE Rs 41 ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/30005143_17-whiskas-dry-cat-food-ocean-fish-flavour-for-adult-cats-1-year.jpg",
      proName: "Whiskas",
      detail: "Dry Cat Food - Junior Ocean Fish, For Kittens, 2-12 Months",
      rate: 4.6,
      select: "1.1 kg-Rs369",
      price: 369,
      strike: "Rs.410",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "kitchenGarden"
    },
    {
      off: "Get 38% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/40188982_4-bb-home-pacific-steel-insulated-vacuum-flask.jpg",
      proName: "BB Home",
      detail: "Pacific Steel Insulated Vacuum Flask",
      rate: 4.5,
      select: "750ml, Rs.559.00",
      price: 559,
      strike: "Rs.899",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "kitchenGarden"
    },
    {
      off: "Get 12% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/40008608_8-natures-plus-neem-oil.jpg",
      proName: "Natures Plus",
      detail: "Neem Oil",
      rate: 4.2,
      select: "100mi -Rs 79.00",
      price: 79,
      strike: "Rs.90",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "kitchenGarden"
    },
    {
      off: "Get 10% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/40235051_1-whiskas-wet-cat-food-adult-1-year-chicken-in-gravy-balanced-nutrition-shiny-coat.jpg",
      proName: "Whiskas",
      detail: "Wet Cat Food - Adult, +1 Year, Chicken In Gravy, Balanced Nutrition, Shiny Coat",
      rate: 3.2,
      select: "85kg-Rs 36.00",
      price: 36,
      strike: "Rs.40",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "kitchenGarden"
    },
    {
      off: "Get 35% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/40209691_1-natures-plus-flower-pot-100.jpg",
      proName: "Natures Plus",
      detail: "Flower Pot 100",
      rate: 3.6,
      select: "10 x 6 x 8.5-Rs.65.00",
      price: 65,
      strike: "Rs.100",
      common: "Standard Delivery:Tomorrow 8:00AM-12:30PM",
      quant: 1,
      category: "kitchenGarden"
    },
    {
      off: "Get 18% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1214626_1-duracell-ultra-alkaline-battery-aa.jpg",
      proName: "Duracell",
      detail: "Ultra-Alkaline Battery AA",
      rate: 4.6,
      select: "2 x 8 pcs Multipack-Rs450.80",
      price: 450.80,
      strike: "Rs.630",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "kitchenGarden"
    },
    {
      off: "SAVE Rs 205 ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/182218_15-pedigree-dry-dog-food-meat-rice-for-adult-dogs.jpg",
      proName: "Pedigree",
      detail: "Dry Dog Food - Meat & Rice, For Adult Dogs",
      rate: 4.4,
      select: "10kg -Rs 1845.00",
      price: 1845.00,
      strike: "Rs.2059",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "kitchenGarden"
    },
    {
      off: "Get 13% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40008669_7-natures-plus-coco-peat.jpg",
      proName: "Natures Plus",
      detail: "COCO Peat",
      rate: 4.2,
      select: "1Kg -Rs.39",
      price: 39,
      strike: "Rs.500",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "kitchenGarden"
    },
    {
      off: "Get 23% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/40015817_1-natures-plus-coco-peat-block-coir-fibre-dust.jpg",
      proName: "Naturals Plus",
      detail: "COCO Peat Block-Coir Fibre Dust",
      rate: 4.3,
      select: "5kg-Rs 279.00",
      price: 279,
      strike: "Rs.360",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "kitchenGarden"
    },
    {
      off: "Get 31% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/40191214_6-bb-home-borosilicate-glass-rectangular-baking-dish.jpg",
      proName: "BB Home",
      detail: "Borosilicate Glass Rectangular Baking Dish",
      rate: 4.2,
      select: "1.6L-Rs.399.00",
      price: 399,
      strike: "Rs.579",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "kitchenGarden"
    },
    {
      off: "Get 15% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/30005124_12-pedigree-meat-jerky-stix-grilled-liver-flavour-for-adult-dogs.jpg",
      proName: "Pedigree",
      detail: "Meat Jerky Stix - Grilled Liver Flavour, For Adult Dogs",
      rate: 4.5,
      select: "80 g Pouch",
      price: 119,
      strike: "Rs.149",
      common: "Standard Delivery:Today 3:00PM-7:30PM",
      quant: 1,
      category: "kitchenGarden"
    },
  ];
  //-----------------------Kuldeeps's Pages-------------------------------
  var eggMeat = [
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/150502_6-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg",
      proName: "Fresho",
      detail: "Farm Eggs - Table Tray, Medium, Antibiotic Residue-Free",
      rate: "3.5✰",
      select: "<option>30 pcs- Rs160.00</option>",
      price: 160.00,
      strike: "Rs.210",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "eggMeat"
    },
    {
      off: "Get 27% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1203477_2-fresho-eggs-regular.jpg",
      proName: "Fresho",
      detail: "Eggs- Regular",
      rate: "3.7✰",
      select: "<option>2*6 pcs Multipack -Rs 72.72</option>",
      price: 72.72,
      strike: "Rs.100",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "eggMeat"
    },
    {
      off: "Get 25% off",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40048898_5-fresho-chicken-curry-cut-without-skin-antibiotic-residue-free.jpg",
      proName: "Fresho",
      detail: "Chicken - Curry Cut Without Skin, Antibiotic Residue-Free",
      rate: "3.3✰",
      select: "<option>1 kg- Rs 217.00</option>",
      price: 217.00,
      strike: "Rs.299",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "eggMeat"
    },
    {
      off: "Get 19% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1213737_1-bb-combo-fresho-farm-eggs-medium-30-pcs-kara-coconut-milk-uht-classic-imported-200-ml.jpg",
      proName: "bb Combo",
      detail: "Fresho Farm Eggs Medium 30 pcs + Kara Coconut Milk UHT Classic, Imported 200 ml",
      rate: "4.2✰",
      select: "<option>combo 2 items</option>",
      price: 226.50,
      strike: "Rs.280",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "eggMeat"
    },
    {
      off: "Get 28% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10001001_7-fresho-chicken-breast-boneless-antibiotic-residue-free.jpg",
      proName: "Fresho",
      detail: "Chicken Breast - Boneless, Antibiotic Residue-Free",
      rate: "3.8✰",
      select: "<option>1kg - Rs 416.00</option>",
      price: 416,
      strike: "Rs.575",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "eggMeat"
    },
    {
      off: "Get 5% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40003814_1-best-plus-egg-veg-feed-no-bad-odour.jpg",
      proName: "Best",
      detail: "Plus Egg - Veg Feed & No Bad Odour",
      rate: "3.7✰",
      select: "<option>6pcs- Pouch - Rs 69.35</option>",
      price: 69.35,
      strike: "Rs.73",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "eggMeat"
    },
    {
      off: "Save rs 13 ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40117922_2-farm-made-eggs-free-range.jpg",
      proName: "Farm Made",
      detail: "Eggs - Free Range",
      rate: "3.9✰",
      select: "<option>12 pcs</option>",
      price: 237.50,
      strike: "Rs.250",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "eggMeat"
    },
    {
      off: "Get 21% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1202514_1-bb-combo-fresho-meat-chicken-curry-cut-without-skin-1kg-everest-chicken-masala-100g.jpg",
      proName: "bb Combo",
      detail: "Fresho Meat Chicken Curry Cut Without Skin 1kg + Everest Chicken Masala 100g",
      rate: "3.9✰",
      select: "<option>Combo 2 items</option>",
      price: 287.30,
      strike: "Rs.364",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "eggMeat"
    },
    {
      off: "Get 23% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000913_7-fresho-chicken-leg-without-skin-antibiotic-residue-free.jpg",
      proName: "Fresho",
      detail: "Chicken Leg - Without Skin, Antibiotic Residue-Free",
      rate: "3.6✰",
      select: "<option>250 g - Rs 119.00</option>",
      price: 119.00,
      strike: "Rs.155",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "eggMeat"
    },
    {
      off: "Get 17% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40048913_4-fresho-mutton-curry-cut-from-whole-carcass-8-10-pcs-antibiotic-residue-free-growth-hormone-free.jpg",
      proName: "Fresho",
      detail: "Mutton - Curry Cut, From Whole Carcass, Antibiotic Residue-Free, Growth Hormone-Free",
      rate: "2.9✰",
      select: "<option>1 kg - Rs 741.00</option>",
      price: 741.00,
      strike: "Rs.899",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "eggMeat"
    },
    {
      off: "Get 23% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40118808_3-fresho-chilli-chicken-pieces-boneless-antibiotic-residue-free.jpg",
      proName: "Fresho",
      detail: "Chilli Chicken Pieces - Boneless, Antibiotic Residue-Free",
      rate: "4✰",
      select: "<option>250 g -Rs.139.00</option>",
      price: 139.00,
      strike: "Rs.181",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "eggMeat"
    },
    {
      off: "Get 45% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/10000926_9-fresho-chicken-curry-cut-with-skin-antibiotic-residue-free-12-14-pcs.jpg",
      proName: "Fresho",
      detail: "Chicken Curry Cut - With Skin, Antibiotic Residue-Free, 11-15 pcs",
      rate: "3.3✰",
      select: "<option>500 g - Rs 110.00</option>",
      price: 110.00,
      strike: "Rs.199",
      common: "Standard Delivery:Tomorrow 9:00AM-1:30PM",
      quant: 1,
      category: "eggMeat"
    },
  ];
  
  var gourmetFood = [
    {
      off: "Get 29% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/1205687_3-happilo-green-raisins-premium-seedless.jpg",
      proName: "Happilo",
      detail: "Premium Seedles Green Raisin",
      rate: "4.1✰",
      select: "<option>2*500g Multipack-Rs 235.12</option>",
      price: 235.12,
      strike: "Rs.330",
      common: "Standard Delivery:Today 2:00PM-6:30PM",
      quant: 1,
      category: "gourmetFood"
    },
    {
      off: "Get 20% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/mm/1215365_1-epigamia-greek-yogurt-wild-raspberry.jpg",
      proName: "Epigamia",
      detail: "Greek Yogurt - Wild, Rasberry",
      rate: "4.1✰",
      select: "<option6*90g Multuipack- Rs239.82</option>",
      price: 239.82,
      strike: "Rs.300",
      common: "Standard Delivery:Today 2:00AM-6:30PM",
      quant: 1,
      category: "gourmetFood"
    },
    {
      off: "Get 37% Off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40191534_1-borges-extra-virgin-olive-oil.jpg",
      proName: "BORGES",
      detail: "Original Extra Virgin Olive Oil",
      rate: "4.4✰",
      select: "<option>2 L PET Bottle - Rs.1350.00</option>",
      price: 1350.00,
      strike: "Rs.2700",
      common: "Standard Delivery:Today 7:30AM-10:30PM",
      quant: 1,
      category: "gourmetFood"
    },
    {
      off: "Get 19% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40094923_7-nutella-hazelnut-spread-with-cocoa.jpg",
      proName: "Nutella",
      detail: "Hazlenut Spread with Cocoa",
      rate: "4.5✰",
      select: "<option>350 g Jar -  Rs.306.00</option>",
      price: 306.00,
      strike: "Rs.380",
      common: "Standard Delivery:Today 2:00PM-6:30PM",
      quant: 1,
      category: "gourmetFood"
    },
    {
      off: "Get 37% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1214334_2-britannia-treat-croissant-cocoa-creme-roll-100-veg.jpg",
      proName: "Britannia",
      detail: "Treat Croissant - Cocoa Creme Roll, 100% Veg",
      rate: "3.9✰",
      select: "<option>6*47 g Multipack - Rs 75.48</option>",
      price: 75.48,
      strike: "Rs.120",
      common: "Standard Delivery:Today  2:00PM-6:30PM",
      quant: 1,
      category: "gourmetFood"
    },
    {
      off: "Get 30% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1201998_2-epigamia-greek-yogurt-natural.jpg",
      proName: "Epigamia",
      detail: "Greek Yogurt - Natural",
      rate: "4.1✰",
      select: "<option>8*90 g Multipack - Rs 279.76</option>",
      price: 276.76,
      strike: "Rs.400",
      common: "Standard Delivery:Today 2:00PM-6:30PM",
      quant: 1,
      category: "gourmetFood"
    },
    {
      off: "Get 50% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/303219_9-borges-durum-wheat-pasta-penne-rigate.jpg",
      proName: "BORGES",
      detail: "Durum Wheat Pasta - Penne Rigate",
      rate: "4.2✰",
      select: "<option>500 g POuch - Rs 111.50</option>",
      price: 111.50,
      strike: "Rs.223",
      common: "Standard Delivery:Today  2:00PM-6:30PM",
      quant: 1,
      category: "gourmetFood"
    },
    {
      off: "Get 35% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1214335_2-britannia-treat-croissant-vanilla-creme-roll-100-veg.jpg",
      proName: "Britannia",
      detail: "Treat Croissant - Vanilla Creme Roll, 100% Veg",
      rate: "3.9✰",
      select: "<option>6*47 g Multipack - Rs.78.00</option>",
      price: 78.00,
      strike: "Rs.120",
      common: "Standard Delivery:Today 2:00PM-6:30PM",
      quant: 1,
      category: "gourmetFood"
    },
    {
      off: "Get 28% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1213798_1-bb-royal-organic-organic-cold-pressed-sunflower-cooking-oil.jpg",
      proName: "BB Royal Organic",
      detail: "Organic Cold Pressed Sunflower Cooking Oil",
      rate: "4✰",
      select: "<option>2x1L Multipack- Rs.558.00</option>",
      price: 558.00,
      strike: "Rs.780",
      common: "Standard Delivery:Today 2:00PM-6:30PM",
      quant: 1,
      category: "gourmetFood"
    },
    {
      off: "Get 10% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/40154924_6-nescafe-gold-blend-instant-coffee-powder-festive-edition-rich-smooth.jpg",
      proName: "Nescafe Gold",
      detail: "Blend Instant Coffee Powder - Festive Edition- Rich & Smooth",
      rate: "4.2✰",
      select: "<option>200 g Jar - Rs 808.00</option>",
      price: 808,
      strike: "Rs.999",
      common: "Standard Delivery:Today  2:00PM-6:30PM",
      quant: 1,
      category: "gourmetFood"
    },
    {
      off: "Get 47% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1212652_1-tasties-nacho-chips-jalapeno.jpg",
      proName: "Tasties",
      detail: "Nacho Chips - Jalapeno",
      rate: "3.9✰",
      select: "<option>2*500g Multipack- Rs.96.16</option>",
      price: 96.16,
      strike: "Rs.180",
      common: "Standard Delivery:Today  2:00PM-6:30PM",
      quant: 1,
      category: "gourmetFood"
    },
    {
      off: "Get 34% off ✹",
      image_url: "https://www.bigbasket.com/media/uploads/p/s/1204212_3-happilo-almonds-100-natural-premium-californian.jpg",
      proName: "Happilo",
      detail: "Premium Natural Californian Almonds",
      rate: "4.2✰",
      select: "<option>2*200g Multipack - Rs 365.75</option>",
      price: 365.75,
      strike: "Rs.550",
      common: "Standard Delivery:Today  2:00PM-6:30PM",
      quant: 1,
      category: "gourmetFood"
    },
  
  ];
  
  function Fruits() {
    console.log("Fruits")
    shop_data = []
    shop_data = fruitsVeg;
    localStorage.setItem("shop_data", JSON.stringify(shop_data))
    window.location.href = "shop.html"
  }
  
  function Food() {
    console.log("Food")
    shop_data = []
    shop_data = grainsMasala;
    localStorage.setItem("shop_data", JSON.stringify(shop_data))
    window.location.href = "shop.html"
  }
  
  function Bakery() {
    console.log("Bakery")
    shop_data = []
    shop_data = bakeryCake;
    localStorage.setItem("shop_data", JSON.stringify(shop_data))
    window.location.href = "shop.html"
  }
  
  function Beverages() {
    console.log("Beverages")
    shop_data = []
    shop_data = bakeryCake;
    localStorage.setItem("shop_data", JSON.stringify(shop_data))
    window.location.href = "shop.html"
  }
  
  function Cleaning() {
    console.log("Cleaning")
    shop_data = []
    shop_data = cleaningHouse;
    localStorage.setItem("shop_data", JSON.stringify(shop_data))
    window.location.href = "shop.html"
  }
  
  function Kitchen() {
    console.log("Kitchen")
    shop_data = []
    shop_data = kitchenGarden;
    localStorage.setItem("shop_data", JSON.stringify(shop_data))
    window.location.href = "shop.html"
  }
  
  function Eggs() {
    console.log("Eggs")
    shop_data = []
    shop_data = eggMeat;
    localStorage.setItem("shop_data", JSON.stringify(shop_data))
    window.location.href = "shop.html"
  }
  
  function Gourmet() {
    console.log("Gourmet")
    shop_data = []
    shop_data = gourmetFood;
    localStorage.setItem("shop_data", JSON.stringify(shop_data))
    window.location.href = "shop.html"
  }
  
  