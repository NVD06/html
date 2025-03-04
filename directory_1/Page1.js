document.querySelector('.dropdown-btn').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
});

let currentIndex = 0; // Vị trí hiện tại của slider
const slideContainer = document.querySelector(".container");
const cards = document.querySelectorAll(".card");
const cardWidth = cards[0].offsetWidth + 20; // Chiều rộng mỗi thẻ (gồm margin)

function slide(direction) {
    const maxIndex = cards.length - 4; // Số lượng card tối đa hiển thị trong slider (ở đây là 4)
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0; // Không vượt ra bên trái
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex; // Không vượt ra bên phải
    }

    slideContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

//Chuong tring hoc tap : section 3
function showContent(contentId) {
    // Hide all content sections
    document.querySelectorAll('.content').forEach(content => {
        content.classList.add('hidden');
    });

    // Show the selected content section
    document.getElementById(contentId).classList.remove('hidden');
}
