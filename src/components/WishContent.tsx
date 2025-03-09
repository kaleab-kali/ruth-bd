// import { useState } from 'react';
// import { FiArrowLeft, FiArrowRight, FiSmartphone } from 'react-icons/fi';

// interface TicketCardProps {
//   imageUrl: string;
//   poem: string[];
// }

// interface CarouselProps {
//   items: TicketCardProps[];
// }

// const TicketCard: React.FC<TicketCardProps> = ({ imageUrl, poem }) => {
//   return (
//     <div className="relative bg-white shadow-xl rounded-[2rem] overflow-hidden mx-2 transition-all duration-300 hover:shadow-2xl flex flex-col h-[85vh] max-h-[600px]">
//       {/* Image Section with Curved Edges */}
//       <div className="relative h-1/2 min-h-[200px]">
//         <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 to-blue-100/20 rounded-t-[2rem] z-10" />
//         <img
//           src={imageUrl}
//           alt="Ticket visual"
//           className="w-full h-full object-cover rounded-t-[2rem] transform hover:scale-105 transition-transform duration-500"
//           loading="lazy"
//         />
//       </div>

//       {/* Poem Section */}
//       <div className="p-4 pt-6 rounded-b-[2rem] bg-gradient-to-b from-white to-gray-50 flex-1 flex flex-col">
//         <div className="flex-1 flex items-center justify-center">
//           <div className="text-gray-700 text-center italic font-serif space-y-1 md:space-y-2 w-full px-4">
//             {poem.map((line, index) => (
//               <p 
//                 key={index} 
//                 className="text-sm md:text-lg leading-tight md:leading-relaxed animate-fadeIn"
//               >
//                 {line}
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Carousel: React.FC<CarouselProps> = ({ items }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);

//   const minSwipeDistance = 50;

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % items.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
//   };

//   const onTouchStart = (e: React.TouchEvent) => {
//     setTouchEnd(0);
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

//   const onTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;
//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > minSwipeDistance;
//     const isRightSwipe = distance < -minSwipeDistance;
//     if (isLeftSwipe) handleNext();
//     if (isRightSwipe) handlePrev();
//   };

//   return (
//     <div className="w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 to-blue-50">
//       <div className="w-full max-w-screen-md mx-auto h-full flex flex-col justify-center relative">
//         {/* Mobile Swipe Indicator */}
//         <div className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gray-500 animate-bounce">
//           <FiSmartphone className="text-xl" />
//           <span>Swipe to navigate</span>
//         </div>

//         {/* Carousel Wrapper */}
//         <div 
//           className="relative overflow-hidden w-full"
//           onTouchStart={onTouchStart}
//           onTouchMove={onTouchMove}
//           onTouchEnd={onTouchEnd}
//         >
//           {/* Items Container */}
//           <div 
//             className="flex transition-transform duration-300 ease-out"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {items.map((item, index) => (
//               <div 
//                 key={index}
//                 className="w-full flex-shrink-0 px-2"
//                 aria-hidden={index !== currentIndex}
//               >
//                 <TicketCard {...item} />
//               </div>
//             ))}
//           </div>

//           {/* Navigation Controls - Visible on all screens */}
//           <button
//             onClick={handlePrev}
//             className="absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 md:left-4"
//             aria-label="Previous item"
//           >
//             <FiArrowLeft className="text-xl md:text-2xl text-gray-700" />
//           </button>
//           <button
//             onClick={handleNext}
//             className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 md:right-4"
//             aria-label="Next item"
//           >
//             <FiArrowRight className="text-xl md:text-2xl text-gray-700" />
//           </button>
//         </div>

//         {/* Pagination Indicators */}
//         <div className="flex justify-center mt-4 space-x-2">
//           {items.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`h-2 w-6 rounded-full transition-all duration-300 ${
//                 index === currentIndex ? 'bg-gray-700 w-8' : 'bg-gray-300'
//               }`}
//               aria-label={`Go to item ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Example Usage
// const ExampleTicketCarousel: React.FC = () => {
//   const tickets: TicketCardProps[] = [
//     {
//       imageUrl: 'vite.svg',
//       poem: [
//         'Beneath the sky\'s vast, azure dome,',
//         'Where whispering winds through treetops roam,',
//         'The golden sun dips low to kiss,',
//         'The horizon\'s edge in evening bliss.'
//       ]
//     },
//     {
//       imageUrl: 'https://picsum.photos/800/600?mountain',
//       poem: [
//         'Through mists of dawn, the world awakes,',
//         'As night\'s last shadow gently breaks,',
//         'In nature\'s arms, we find our way,',
//         'To greet the birth of perfect day.'
//       ]
//     }
//   ];

//   return <Carousel items={tickets} />;
// };

// // src/components/WishContent.tsx
// export default function WishContent() {
//   return (
//     <div className="fixed inset-0 overflow-hidden">
//       <ExampleTicketCarousel/>
//     </div>
//   );
// }


import { useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiSmartphone } from 'react-icons/fi';

interface TicketCardProps {
  imageUrl: string;
  title: string;
  poem: string[];
}

interface CarouselProps {
  items: TicketCardProps[];
}

const TicketCard: React.FC<TicketCardProps> = ({ imageUrl, title, poem }) => {
    return (
      <div className="relative bg-white shadow-xl rounded-[2rem] overflow-hidden mx-2 transition-all duration-300 flex flex-col h-[85vh] max-h-[600px]">
        {/* Image Section */}
        <div className="relative h-1/2 min-h-[200px]">
          <img
            src={imageUrl}
            alt="Romantic visual"
            className="w-full h-full object-cover rounded-t-[2rem]"
            loading="lazy"
          />
        </div>
  
        {/* Poem Section */}
        <div className="p-3 pt-4 rounded-b-[2rem] flex-1 flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <div className="text-gray-700 text-center w-full px-2">
              <h3 className="text-lg font-bold text-rose-600 mb-1">{title}</h3>
              <div className="space-y-1">
                {poem.map((line, index) => (
                  <p 
                    key={index} 
                    className="text-xs sm:text-sm leading-tight font-medium"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 50;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
  };

  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="w-full max-w-screen-md mx-auto h-full flex flex-col justify-center relative">
        {/* Mobile Swipe Indicator */}
        <div className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gray-500 animate-bounce">
          <FiSmartphone className="text-xl" />
          <span>Swipe to navigate</span>
        </div>

        {/* Carousel Wrapper */}
        <div 
          className="relative overflow-hidden w-full"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Items Container */}
          <div 
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 px-2"
                aria-hidden={index !== currentIndex}
              >
                <TicketCard {...item} />
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 md:left-4"
            aria-label="Previous item"
          >
            <FiArrowLeft className="text-xl md:text-2xl text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 md:right-4"
            aria-label="Next item"
          >
            <FiArrowRight className="text-xl md:text-2xl text-gray-700" />
          </button>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-6 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-gray-700 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};



const ExampleTicketCarousel: React.FC = () => {
  const tickets: TicketCardProps[] = [
    {
      imageUrl: '5.jpg',
      title: "Her Hair",
      poem: [
        "Your hair flows like midnight streams,",
        "Soft waves that make me lost in dreams.",
        "It shines so bright in pale moonlight,",
        "Catches every ray of day's last light.",
        "No jewel could ever compare,",
        "To your flowing hair so rare.",
        "It wraps around me with warm grace,",
        "Leaving me breathless in this place."
      ]
    },
    {
      imageUrl: '7.jpg',
      title: "Her Eyes",
      poem: [
        "Your eyes hold galaxies unknown,",
        "Universes where I feel at home.",
        "Our glances meet, my heart takes flight,",
        "Finding bloom in your soft light.",
        "",
        "Your gaze has healing power too,",
        "It makes my worries fade to blue.",
        "With just one look, you say it all,",
        "My forever home, my everything."
      ]
    },
    {
        imageUrl: '1.jpg',
        title: "Her Nose",
        poem: [
          "Gentle and perfect, with elegant grace,",
          "A subtle charm upon her face.",
          "A little bridge where soft winds play,",
          "Guiding her beauty in a flawless way.",
          "With every breath, she fills the air,",
          "With sweetness, warmth, a love so rare.",
          "Her nose, a symbol of pure design,",
          "A simple touch, yet truly divine."
        ]
      },
    {
      imageUrl: '3.jpg',
      title: "Her Smile",
      poem: [
        "Your smile lights up any room,",
        "Chasing darkest gloom away.",
        "Breaks through clouds like morning sun,",
        "Turning my dull world to fun.",
        "When you grin, my heart takes flight,",
        "All troubles disappear from sight.",
        "It's the sweetest thing I've seen,",
        "A treasure that makes life clean.",
      ]
    },
    {
      imageUrl: '4.jpg',
      title: "Her Laugh",
      poem: [
        "Your laugh is music to my ears,",
        "Better than any choir or symphony.",
        "When you throw your head back free,",
        "All worries fade completely.",
        "It bubbles up like stream's sweet song,",
        "Healing wounds, making things whole.",
        "I'd trade all treasure just to hear,",
        "That sound that draws me near.",
        "It dances in my mind all day,",
        "Chasing shadows far away.",
      ]
    },
   
    
      {
        imageUrl: '2.jpg',
        title: "Her Lips",
        poem: [
          "Soft as petals, a velvet hue,",
          "Every whisper feels brand new.",
          "With every word, they weave delight,",
          "A melody sweet, a kiss so light.",
          "When they smile, the world turns bright,",
          "Banishing shadows, filling with light.",
          "Her lips, a promise, tender and true,",
          "A gateway to love, forever in view."
        ]
      },
      {
        imageUrl: '6.jpg',
        title: "Her Cheeks",
        poem: [
          "Blushing softly like morning’s hue,",
          "A touch of warmth in every view.",
          "When she smiles, they light the air,",
          "A gentle glow beyond compare.",
          "Like roses kissed by the golden sun,",
          "They radiate joy, second to none.",
          "Her cheeks, a glimpse of love’s embrace,",
          "A touch of beauty, soft with grace."
        ]
      },
      {
        imageUrl: '8.jpg',
        title: "Her Heart",
        poem: [
          "Your heart is kinder than spring rain,",
          "Nourishing all without strain.",
          "It gives without expecting back,",
          "A precious gem that's never slack.",
          "You love with all your being true,",
          "Never holding back, always new.",
          "Your warmth could melt the coldest ice,",
          "Your care makes everything nice.",
          "With you, I've found my perfect home,",
          "Your heart is where I'm never alone."
        ]
      },
  ];

  return <Carousel items={tickets} />;
};



export default function WishContent() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <ExampleTicketCarousel/>
    </div>
  );
}