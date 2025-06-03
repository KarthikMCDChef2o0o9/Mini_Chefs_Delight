document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your Public Key
    emailjs.init('gqyhexx1hEecc_5J7');

    // Sample food data
    const foodItems = [
        {
            id: 1,
            title: "Gourmet Veg Burger",
            category: "mains",
            description: "Healthy vegetable patty with tasty and juicy paneer, onions, mouth-watering lettuce & special sauce on a brioche bun.",
            price: "₹150 for 1",
            imageUrl: "images/2.jpg"
        },
        {
            id: 2,
            title: "Special Sauce Pasta",
            category: "mains",
            description: "A homemade delicacy made with pasta, tomato sauce, and your choice of toppings like vegetables, olives, or bell peppers.",
            price: "₹100 for a plate",
            imageUrl: "images/15.jpg"
        },
        {
            id: 3,
            title: "Chocolate Soufflé",
            category: "desserts",
            description: "Warm chocolate soufflé with a molten center, served with vanilla bean ice cream.",
            price: "₹80 for a cup",
            imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=627&q=80"
        },
        {
            id: 4,
            title: "Bruschetta",
            category: "appetizers",
            description: "Toasted bread topped with tomatoes, garlic, fresh basil, and olive oil.",
            price: "₹50 for 1",
            imageUrl: "images/14.jpg"
        },
        {
            id: 5,
            title: "Paal Payasam",
            category: "specials",
            description: "A South Indian favorite dish loved worldwide!",
            price: "100gms is ₹50",
            imageUrl: "images/4.jpg"
        },
        {
            id: 6,
            title: "Caprese Salad",
            category: "appetizers",
            description: "Fresh mozzarella, tomatoes, and sweet basil, seasoned with salt and olive oil.",
            price: "₹70 for a bowl",
            imageUrl: "images/3.jpg"
        },
        {
            id: 7,
            title: "Assorted Buggi",
            category: "snacks",
            description: "Instead of just 1 bhaji, you get 6: Mini Vayakai Bhaji, Mini Bonda, Mini Samosa, Mini Vada, Mini Bread Bhaji, and a Mini Mulaghai Bhaji.",
            price: "₹120 for all",
            imageUrl: "images/9.jpg"
        },
        {
            id: 8,
            title: "Mini Apple Pie",
            category: "desserts",
            description: "A mini delicacy made with apple, no eggs, and customizable toppings.",
            price: "₹250 for 1",
            imageUrl: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 9,
            title: "Veg Omelet",
            category: "mains",
            description: "An amazing dish made by my mother and I have taken her tradition. It does not have eggs and is made from besan.",
            price: "₹40 for 2",
            imageUrl: "images/6.jpg"
        },
        {
            id: 10,
            title: "Special Cheese Sandwich",
            category: "mains",
            description: "You may think it's a normal sandwich, but it's filled with mozzarella and amazing vegetables.",
            price: "₹30 for 2 halves",
            imageUrl: "images/7.jpg"
        },
        {
            id: 11,
            title: "Bread Pakoda",
            category: "snacks",
            description: "A nice oily snack to eat, plus you get masala-filled sandwich fried with sauce.",
            price: "₹15 for 1",
            imageUrl: "images/5.jpg"
        },
        {
            id: 12,
            title: "Soya Cutlet",
            category: "snacks",
            description: "A traditional dish from North India with soya balls inside.",
            price: "₹20 for 2",
            imageUrl: "images/8.jpg"
        },
        {
            id: 13,
            title: "Special French Fries",
            category: "appetizers",
            description: "An amazingly tasty set of fried strings of beautiful potatoes.",
            price: "₹50 for a mini bowl",
            imageUrl: "images/10.jpg"
        },
        {
            id: 14,
            title: "Mango & Strawberry Milkshake",
            category: "drinks",
            description: "A dedicated milkshake to my mom since she loved it, and it's very tasty.",
            price: "₹70 for a glass",
            imageUrl: "images/11.jpg"
        },
        {
            id: 15,
            title: "Choco Vanilla Milkshake",
            category: "drinks",
            description: "A classic milkshake that tastes so good!",
            price: "₹70 for a glass",
            imageUrl: "images/12.jpg"
        },
        {
            id: 16,
            title: "Strawberry & Banana Milkshake",
            category: "drinks",
            description: "A nice shot of strawberry and a nice twirl of banana in a milkshake.",
            price: "₹70 for a glass",
            imageUrl: "images/13.jpg"
        }
    ];

    // DOM Elements
    const galleryGrid = document.querySelector('.gallery-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const dishSelect = document.getElementById('dish');
    const dishNameInput = document.getElementById('dish_name');
    const orderForm = document.getElementById('order-form');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('image-title');
    const modalDescription = document.getElementById('image-description');
    const modalPrice = document.getElementById('image-price');
    const closeModal = document.querySelector('.close-modal');
    const orderConfirmation = document.getElementById('order-confirmation');
    const closeConfirmation = document.querySelector('.close-confirmation');
    const closeConfirmationBtn = document.getElementById('close-confirmation');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    const slides = document.querySelectorAll('.slide');
    const upArrow = document.querySelector('.up-arrow');
    const downArrow = document.querySelector('.down-arrow');

    // Initialize the gallery
    function initGallery() {
        galleryGrid.innerHTML = '';
        dishSelect.innerHTML = '<option value="">Select a Dish</option>';
        foodItems.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.title;
            dishSelect.appendChild(option);

            const galleryItem = document.createElement('div');
            galleryItem.className = `gallery-item ${item.category}`;
            galleryItem.dataset.id = item.id;
            galleryItem.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.title}">
                <div class="image-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.price}</p>
                </div>
            `;
            galleryGrid.appendChild(galleryItem);
            galleryItem.addEventListener('click', () => openModal(item));
        });
    }

    // Filter gallery items
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.dataset.filter;
            const galleryItems = document.querySelectorAll('.gallery-item');
            galleryItems.forEach(item => {
                item.style.display = (filter === 'all' || item.classList.contains(filter)) ? 'block' : 'none';
            });
        });
    });

    // Open modal with food details
    function openModal(item) {
        modalImage.src = item.imageUrl;
        modalImage.alt = item.title;
        modalTitle.textContent = item.title;
        modalDescription.textContent = item.description;
        modalPrice.textContent = item.price;
        dishSelect.value = item.id;
        dishNameInput.value = item.title;
        modal.scrollTop = 0;
        modal.style.display = 'block';
        setTimeout(() => modal.classList.add('show'), 10);
        const modalOrderBtn = document.querySelector('.order-btn');
        modalOrderBtn.addEventListener('click', () => {
            closeModal.click();
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal.click();
    });

    // Handle form submission with EmailJS
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            dish: dishNameInput.value || dishSelect.options[dishSelect.selectedIndex].text,
            message: document.getElementById('message').value,
            date: new Date().toLocaleString()
        };

        // Send email using EmailJS
        emailjs.send('service_2xpv52j', 'template_hihma49', formData)
            .then(() => {
                console.log('Email sent successfully!');
                orderConfirmation.style.display = 'flex';
                orderForm.reset();
                dishNameInput.value = '';
            }, (error) => {
                console.error('Email failed to send:', error);
                alert('There was an error sending your order. Please try again later or contact us directly at ramzkarthik2014@gmail.com');
            });
    });

    // Close confirmation modal
    closeConfirmation.addEventListener('click', () => {
        orderConfirmation.style.display = 'none';
    });
    
    closeConfirmationBtn.addEventListener('click', () => {
        orderConfirmation.style.display = 'none';
    });

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Navigation link handling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            if (window.innerWidth <= 768) {
                navList.classList.remove('active');
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Slider functionality
    let currentSlide = 0;
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.remove('active');
        slides[next].classList.add('active');
        currentSlide = next;
    }

    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.remove('active');
        slides[prev].classList.add('active');
        currentSlide = prev;
    }

    upArrow.addEventListener('click', prevSlide);
    downArrow.addEventListener('click', nextSlide);

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Initialize
    initGallery();
    showSlide(0);
});