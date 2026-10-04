// ელემენტების წამოღება DOM-იდან
const stomachImg = document.getElementById('stomach-img');
const statusBadge = document.getElementById('status-badge');
const formulaBox = document.getElementById('formula-box');
const explanation = document.getElementById('explanation');
const bubblesContainer = document.getElementById('bubbles-container');
const comparisonSection = document.getElementById('comparison-section');

// ბუშტუკების შექმნის ფუნქცია (CO2 აირის ვიზუალიზაციისთვის)
function createBubbles() {
    clearBubbles();
    for (let i = 0; i < 15; i++) {
        let bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // შემთხვევითი ზომა და პოზიცია კუჭის არეში
        let size = Math.random() * 12 + 6;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${120 + Math.random() * 80}px`;
        bubble.style.animationDelay = `${Math.random() * 1.5}s`;
        
        bubblesContainer.appendChild(bubble);
    }
}

// ბუშტუკების გასუფთავება
function clearBubbles() {
    bubblesContainer.innerHTML = '';
}

// ცდის გაშვების ფუნქცია
function runExperiment(type) {
    comparisonSection.style.display = 'block';

    if (type === 'soda') {
        // 1. საჭმლის სოდის ცდა
        stomachImg.className = 'bloated'; // შებერილობის ვიზუალიზაცია
        statusBadge.className = 'badge warning';
        statusBadge.innerText = '⚠️ წვა მოიხსნა, თუმცა წარმოიქმნა შებერილობა!';
        
        createBubbles(); // CO2 ბუშტუკების გაჩენა

        formulaBox.innerHTML = `
            <strong>ქიმიური რეაქციის ტოლობა:</strong><br>
            <span style="color: #e67e22; font-weight: bold;">NaHCO₃</span> + <span style="color: #e74c3c;">HCl</span> ➔ <strong>NaCl</strong> + <strong>H₂O</strong> + <span style="color: #e67e22; font-weight: bold;">CO₂↑</span>
        `;

        explanation.innerHTML = `
            <strong>შედეგის ახსნა:</strong><br>
            • <strong>მჟავის ნეიტრალიზაცია:</strong> სოდამ (NaHCO3) გაანეიტრალა მარილმჟავა (HCl), რის შედეგადაც წარმოიქმნა მარილი (NaCl) და წყალი (H2O). წვის შეგრძნება გაქრა.<br>
            • <strong>გვერდითი ეფექტი:</strong> რეაქციისას ინტენსიურად გამოყოფილი <strong>ნახშირორჟანგის აირი (CO2)</strong> იწვევს კუჭის კედლების გაჭიმვას, შებერილობასა და სიმძიმის შეგრძნებას.
        `;

    } else if (type === 'mg') {
        // 2. მაგნიუმის ჰიდროქსიდის ცდა
        stomachImg.className = 'normal'; // ნორმალური მდგომარეობა
        statusBadge.className = 'badge success';
        statusBadge.innerText = '✅ მჟავიანობა დარეგულირდა შებერილობის გარეშე!';
        
        clearBubbles(); // აირი არ გამოიყოფა

        formulaBox.innerHTML = `
            <strong>ქიმიური რეაქციის ტოლობა:</strong><br>
            <span style="color: #27ae60; font-weight: bold;">Mg(OH)₂</span> + <span style="color: #e74c3c;">2HCl</span> ➔ <strong>MgCl₂</strong> + <strong>2H₂O</strong>
        `;

        explanation.innerHTML = `
            <strong>შედეგის ახსნა:</strong><br>
            • <strong>სრული ნეიტრალიზაცია:</strong> მაგნიუმის ჰიდროქსიდმა (Mg(OH)2) გაანეიტრალა კუჭის მარილმჟავა.<br>
            • <strong>უპირატესობა:</strong> რეაქციის პროდუქტებია მხოლოდ მაგნიუმის ქლორიდი (MgCl2) და წყალი (H2O). <strong>ნახშირბადი/აირი (CO2) საერთოდ არ გამოყოფილია</strong>, რის გამოც პაციენტს შებერილობა არ აწუხებს.
        `;
    }
}

// საწყის მდგომარეობაში დაბრუნება
function resetExperiment() {
    stomachImg.className = 'inflamed';
    statusBadge.className = 'badge danger';
    statusBadge.innerText = '🔥 გულძმარვა (HCl-ის მაღალი დონე)';
    clearBubbles();
    
    formulaBox.innerHTML = `
        <strong>საწყისი მდგომარეობა:</strong><br>
        კუჭში არის ჭარბი მარილმჟავა (HCl), pH < 7
    `;
    
    explanation.innerHTML = 'აირჩიეთ ერთ-ერთი ცდა ზემოთ მდებარე ღილაკებით, რათა დააკვირდეთ რეაქციასა და შედეგებს.';
    comparisonSection.style.display = 'none';
}