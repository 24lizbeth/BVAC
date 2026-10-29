const REPAIRSBtn = document.getElementById("REPAIRSBtn");
const MAINTENANCEBtn = document.getElementById("MAINTENANCEBtn");
const INSTALLATIONBtn = document.getElementById("INSTALLATIONBtn");
const MedicalBtn = document.getElementById("MedicalBtn");
const AerospaceBtn = document.getElementById("AerospaceBtn");
const shortRunBtn = document.getElementById("shortRunBtn");
const ServiceCardContent = document.getElementById("ServiceCardContent");



REPAIRSBtn.addEventListener("click",function() {
    ServiceCardContent.innerHTML = `
                    <h3>REPAIRS</h3>
                    `;
                    });


MAINTENANCEBtn.addEventListener("click",function() {
    ServiceCardContent.innerHTML = `
                    <h3>MAINTENANCE</h3>
                    `;
                    }); 
                    
                    
INSTALLATIONBtn.addEventListener("click",function() {
    ServiceCardContent.innerHTML = `
                    <h3>INSTALLATION</h3>
                    
                    `;
                    });                       


MedicalBtn.addEventListener("click",function() {
    ServiceCardContent.innerHTML = `
                    <h3>Medical Device Machining Services</h3>   <br><br>                
                    <p class="card-p">Medical and dental parts often require a high level of precision, especially when components need to fit together or maintain consistent dimensions throughout production. Our 5-axis milling capabilities allow complex features and geometries to be machined with fewer setups, helping maintain accuracy between critical surfaces. Prototype work and production quantities can both be accommodated, depending on the requirements of the part.<br><br>
                    From medical components and surgical tooling to dental parts and custom fixtures, each job is approached around the material, tolerances, and intended use of the component. Aluminum, stainless steel, titanium, and engineering plastics can be machined for a variety of applications. Complex shapes, angled features, and difficult-to-reach areas can often be handled more efficiently with 5-axis machining.<br><br>
                    Consistency becomes especially important when a part moves into production. Critical dimensions are checked during machining and finished parts are inspected against the drawing and specified requirements.<br><br>
                    Whether you need a small batch of dental components, prototype medical parts, or a larger production run, the machining process can be scaled to meet the needs of the project. The focus is on producing accurate, repeatable parts while keeping production practical and turnaround times reasonable.<br><br>
                    </p>
                    `;
                    });                       


AerospaceBtn.addEventListener("click",function() {
    ServiceCardContent.innerHTML = `
                    <h3>Aerospace & Defense Machining services</h3>  <br>        
                    <p>Precision and consistency are crucial when producing machined parts for aerospace and defense applications. Our experience with tight-tolerance components provides a strong foundation for this type of work, where critical dimensions and repeatability are important. Your engineering and manufacturing teams can work directly with our shop to address manufacturing challenges, improve manufacturability, and produce parts according to your specifications. <br><br>
                    We provide prototype into production machining, allowing parts to move from an initial design into production without having to find another machining source. <Br>
                    Materials we have experience with: <br><br>
                    Aluminum 6061 <br><br>
                    Aluminum 7075 <br><br>
                    Stainless Steel 304 <br><br>
                    Stainless Steel 316 <br><br>
                    Your components are made with meticulous care throughout the fabrication cycle as we maintain the highest quality standard in our quality control systems, compliant with ISO9001 and AS9100 requirements.<br><br>
                    Our machining capabilities are also suited for parts with tight tolerances and detailed features. Critical dimensions are monitored during production and finished components are inspected against your drawings and specifications. Maintaining consistency from one part to the next helps keep production running smoothly and reduces the need for additional adjustments or rework.<br><br>
                    Whether the requirement is a single prototype or a larger production run, we produce accurate parts while keeping machining time, material waste, and production costs under control.<br><br>
                   </p>
                    `;
                    });                       


shortRunBtn.addEventListener("click",function() {
    ServiceCardContent.innerHTML = `
                    <h3>Short Run - High Volume machining</h3>   <br>     
                    <p>Production quantities can vary considerably from one project to the next. Some jobs may only require a few dozen parts, while others call for hundreds or more. Our machining process can accommodate both, allowing the same part to move from a short production run into larger quantities as demand increases. Once a part is set up and proven, repeat orders can be produced using the same programs, tooling, and processes to help keep parts consistent.<br><br>
                    Short-run machining can also be a practical option when committing to a large quantity does not make sense yet. Parts can be produced as they are needed instead of tying up money in excess inventory, while still using production-grade materials and machining processes. For larger orders, production quantities can be planned around available machine time, tooling, material, and the requirements of the part.<br><br>
                    Keeping production consistent becomes more important as the number of parts increases. Tooling, workholding, setups, and inspection all play a role in maintaining the dimensions of each part throughout a run. Our 5-axis milling capabilities can also reduce the number of setups needed on complex parts, helping maintain the relationship between critical features while reducing unnecessary machining time.<br><br>
                    From a short run of replacement parts to a larger batch of components, the goal is to keep production moving without sacrificing the accuracy of the finished parts. Quantities can be adjusted around your needs, giving you the flexibility to order what is needed now and increase production when demand calls for it.<br><br>
                    </p>
                    `;
                    });                      


