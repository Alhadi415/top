const questions = [
    
    
        {
            "question": "Sound waves cannot travel through one of the following:",
            "options": ["Water", "Air", "Metal", "Vacuum"],
            "answer": "Vacuum",
            "explanation": "Sound waves cannot travel in a vacuum, as pressure waves can only be transmitted through physical media consisting of molecules that interact with each other. Water, air, and metal are all such media, and therefore sound waves can and indeed do travel in them."
        },
        {
            "question": "Ultrasound is a pressure wave with a frequency above the audible range of human hearing, which is:",
            "options": ["200 Hz", "2 kHz", "20,000 Hz", "200 kHz"],
            "answer": "20,000 Hz",
            "explanation": "The upper limit of the audible range of human hearing is 20,000 Hz or 20 kHz. There are animals that can hear sounds in different ranges than humans. For example, bats’ hearing includes sounds in a much higher frequency range. This is known as supersonic hearing. They produce these sound waves, which then echo back to them by bouncing off objects so that they know how far something is, just like a sonar on a submarine."
        },
        {
            "question": "The frequency of a sound wave is measured in Hz as the:",
            "options": [
                "Inverse of the wavelength",
                "Maximal amplitude of particle vibration",
                "Number of times particles vibrate each second in the direction perpendicular to wave propagation",
                "Number of times particles vibrate each second in the direction of wave propagation"
            ],
            "answer": "Number of times particles vibrate each second in the direction of wave propagation",
            "explanation": "Frequency in general is measured in Hz (abbreviation for Hertz), which is defined as 1/sec. The frequency of a wave is defined as the number of times a particle in a conducting medium vibrates per unit time. Thus, frequency is the inverse of the period. Since sound waves are pressure disturbances traveling in the medium in the direction of the particle vibrations, they are called longitudinal waves. In other words, sound waves are vibrations in the direction of wave propagation, and therefore the correct answer."
        },
        {
            "question": "Ultrasound imaging is usually performed using frequencies in the range of:",
            "options": ["1–30 kHz", "Below 5 MHz", "Above 0.5 MHz", "1–30 MHz"],
            "answer": "1–30 MHz",
            "explanation": "Ultrasound imaging is usually performed using frequencies in the range of 1–30 MHz. The lower frequencies in this range are used to image large organs or deeper structures that require significant penetration depth, while the higher frequencies are used for smaller and more superficial structures that require less depth but better spatial resolution."
        },
        {
            "question": "Assuming that sound velocity in muscle tissue is 1,600 m/sec, the wavelength of a sound wave with the frequency of 1.6 MHz is:",
            "options": ["1 mm", "1 cm", "1 m", "0.1 mm"],
            "answer": "1 mm",
            "explanation": "Wavelength (λ) is defined as the distance a wave travels during a single cycle. Wavelength can be calculated as the product of velocity (c) and the period (T), or alternatively, the ratio of velocity and frequency (f). Using the formula λ = c / f, we find that λ = 1.6 × 10^3 m/s ÷ 1.6 × 10^6 Hz = 1 mm."
        },
        {
            "question": "As an ultrasound wave travels through the human body, the type of tissue that results in the fastest loss of its strength is:",
            "options": ["Fat", "Bone", "Lung", "Blood"],
            "answer": "Lung",
            "explanation": "Because of the high content of air and the abundance of highly reflective tissue/air interfaces, the sound waves dissipate in the lungs so fast that the lungs are virtually opaque to ultrasound."
        },
        {
            "question": "The main goal of the gel used during ultrasound imaging is to:",
            "options": [
                "Disinfect the transducer",
                "Cool the transducer",
                "To numb the skin and thus reduce patient's discomfort caused by pressure",
                "To improve the contact between transducer surface and the skin"
            ],
            "answer": "To improve the contact between transducer surface and the skin",
            "explanation": "The main goal of the coupling gel is to improve the contact between the transducer surface and the skin by eliminating any tissue/air interfaces, which are highly reflective and thus prevent ultrasound transmission into the body."
        },
        {
            "question": "Materials that respond to acoustic waves by generating electric signals and vice versa are known as:",
            "options": ["Doppler crystals", "Acoustic coupling gels", "Piezoelectric crystals", "Chronotropic agents"],
            "answer": "Piezoelectric crystals",
            "explanation": "Materials that respond to electric signals by vibrating and generating acoustic waves, and vice versa, respond to acoustic waves by generating electric signals, are known as piezoelectric crystals. These materials are the basis for medical ultrasound imaging, which relies on transmitting waves by 'exciting' the crystals in the transducer by an electrical stimulus, and then receiving the ultrasound waves reflected by structures inside the body and translating them back into electrical signals that are used to form an image of the reflecting structures."
        },
        {
            "question": "Doppler effect refers to:",
            "options": [
                "Change in strength of a sound wave reflected by a moving target",
                "Change in frequency of a sound wave reflected by a moving target",
                "Change in shape of a sound wave reflected by a moving target",
                "Loss of ultrasound energy as a result of wave dissipation by flow"
            ],
            "answer": "Change in frequency of a sound wave reflected by a moving target",
            "explanation": "The Doppler effect refers to a change in the frequency of a sound wave reflected by a moving target. We are all familiar with the Doppler effect from our daily life: sounds coming from a moving object have a higher pitch when the object approaches us than when the same object moves away from us."
        },
        
            
    // باقي الأسئلة هنا ...
    {
        "question": "Doppler angle is the angle between:",
      "options": [
        "The flow and the long axis of the left ventricle",
        "The ultrasound beam and the long axis of the left ventricle",
        "The flow and the transmitted ultrasound beam",
        "The flow and the central axis of the transducer"
      ],
      "answer": "The flow and the transmitted ultrasound beam",
      "explanation": " Doppler angle is the angle between the direction of flow (in Figure 1-10, flow through the tricuspid valve indicated by the blue arrow) and that of the ultrasound beam (green line). The orientation of either the ventricle (long axis indicated by the pink line) or the transducer (central axis indicated by the brown line) has no role in the interaction between ultrasound and moving blood cells that reflect ultrasound at a frequency that depends on the direction of blood flow along the beam  Like the train, blood cells moving away from the transducer reflect sound with lower frequency than those moving toward the transducer. What determines whether it is the former or the latter is the angle between the flow and the direction of the transmitted beam: when the angle is 90 degrees, then the flow is away from the transducer, and vice versa, when the angle is 90 degrees, then the flow is toward the transducer.  ",
      
    "explanationImage": "images/10.jpg"// مسار الصورة
    
    },
    
    {
        "question": "A positive Doppler shift indicates that the reflector is moving:",
        "options": [
            "Faster than the sound wave propagates.",
            "Directly toward the transducer.",
            "Directly away from the transducer.",
            "So that the angle between the transmitted beam and the direction of motion is >90 degrees."
        ],
        "answer": "So that the angle between the transmitted beam and the direction of motion is >90 degrees.",
        "explanation": "A positive Doppler shift indicates that the reflector is moving so that the angle between the transmitted beam and the direction of flow is >90 degrees, i.e., the reflectors are getting closer, but not necessarily moving directly toward the transducer."
    },
    {
        "question": "Doppler shift of zero indicates that the reflector is stationary or:",
        "options": [
            "Moving in a direction perpendicular to the beam.",
            "Moving in a direction parallel to the beam.",
            "Moving in a direction perpendicular to the central axis of the transducer.",
            "Moving too fast to register."
        ],
        "answer": "Moving in a direction perpendicular to the beam.",
        "explanation": "Doppler shift of zero indicates that the reflector is stationary or moving in a direction perpendicular to the beam. Importantly, when the Doppler angle is 90 degrees, the flow is neither toward nor away from the transducer, but perpendicular to the beam and thus will produce no Doppler shift, or, in other words, will reflect ultrasound at the same frequency that was transmitted."
    },
    {
        "question": "Time gain compensation is part of the ultrasound image formation aimed at correcting intensity for variations to the extent to which different media result in ultrasound:",
        "options": ["Scattering.", "Absorption.", "Reflection.", "Attenuation."],
        "answer": "Attenuation.",
        "explanation": "The combined result of ultrasound scattering, absorption, and reflection is attenuation. Time gain compensation aims at providing a correction for the loss of intensity (or attenuation) by all these different mechanisms. This is done assuming that attenuation in different types of tissue in the heart is the same, which is a reasonably accurate assumption. However, it may become quite inaccurate when there are materials with drastically different acoustic properties such as contrast agents that cause much stronger attenuation. This is the reason why acoustic shadowing artifacts are frequently seen distal to contrast-filled blood pools, such as ventricles or atria."
    },
    {
        "question": "The strength of the transmitted ultrasound wave is controlled by adjusting the:",
        "options": [
            "Time gain compensation controls.",
            "Compression control.",
            "Power control.",
            "Overall gain control."
        ],
        "answer": "Power control.",
        "explanation": "The strength of the transmitted ultrasound wave is controlled by adjusting the power control. Gain control determines to what extent the received signal is amplified, and the compression determines the dynamic range of received signals that are used to create the image. Time gain compensation has nothing to do with the strength of the transmitted power: it is part of postprocessing of the reflections designed to correct for beam attenuation as it travels through the body."
    },
    {
        "question": "The spatial resolution of an ultrasound image is defined as the:",
        "options": [
            "Smallest distance between two objects that allows distinction between them.",
            "Size of the smallest object that can be clearly visualized in its entirety.",
            "Smallest cluster of pixels that can define a single object.",
            "Smallest difference in the size of an object that can be visually detected."
        ],
        "answer": "Smallest distance between two objects that allows distinction between them.",
        "explanation": "The spatial resolution of an ultrasound image is defined as the smallest distance between two objects that allows distinction between them. This is the definition of spatial resolution. Understandably, the spatial resolution also determines the size of the smallest object that can be visualized. However, the change in the size of an object is certainly not the definition of resolution."
    },
    {
        "question": "The spatial resolution of an ultrasound image is equal to the:",
        "options": [
            "Gap between two adjacent pixels.",
            "Twice the wavelength.",
            "Size of a pixel in the relevant direction.",
            "One-half of the wavelength."
        ],
        "answer": "Size of a pixel in the relevant direction.",
        "explanation": "While spatial resolution along the ultrasound beam is directly related to wavelength, it is affected by other factors in other directions. However, it can be easily determined by the size of a pixel in the relevant direction, if that is known. The gap between two adjacent pixels is a nonsensical answer designed to confuse you, since there is no gap between adjacent pixels."
    },
    {
        "question": "The temporal resolution of a sequence of ultrasound images is defined by the:",
        "options": [
            "Shortest duration of an event that can be detected with confidence.",
            "Shortest time in which image information can change completely.",
            "Shortest time between two events that allows distinction between them.",
            "Shortest time in which pixel values can change."
        ],
        "answer": "Shortest time between two events that allows distinction between them.",
        "explanation": "Similar to spatial resolution, temporal resolution of a sequence of ultrasound images is defined by the shortest time between two events that allows distinction between them. Similarly, temporal resolution determines the shortest duration of an event that can be detected, but 'with confidence' is a subjective term that makes answer (A) incorrect. Answers (B) and (D) are nonsense."
    },
    {
        "question": "The temporal resolution of a sequence of ultrasound images is equal to the:",
        "options": [
            "Inverse of transducer frequency.",
            "Inverse of frame rate.",
            "One cycle of the ultrasound wave.",
            "Inverse of the number of frames in the sequence."
        ],
        "answer": "Inverse of frame rate.",
        "explanation": "The temporal resolution of a sequence of ultrasound images is equal to the inverse of the frame rate. The inverse of the transducer frequency is a period (duration of a single cycle) of the ultrasound wave, and is in the order of magnitude of microseconds. The temporal resolution of a sequence of images is nowhere near: it is hundreds of thousands of times longer. Answer (D) is nonsense, as one can create a sequence of any number of frames, which has nothing to do with temporal resolution."
    },
    {
        "question": "The dynamic range of echoes displayed on the screen is adjusted by the:",
        "options": [
            "Time gain compensation control.",
            "Compression control.",
            "Transmit power control.",
            "Overall gain control."
        ],
        "answer": "Compression control.",
        "explanation": "The dynamic range of echoes displayed on the screen is adjusted by the compression control. This control can be used to include or suppress weak echoes."
    },
    {
        "question": "As the frequency of ultrasound increases, the maximum imaging depth in the human body:",
        "options": [
            "Increases.",
            "Decreases.",
            "Remains unchanged.",
            "May increase or decrease depending on the mechanical index used."
        ],
        "answer": "Decreases.",
        "explanation": "Sound waves of higher frequencies dissipate in conducting media faster than those with lower frequencies, due to a variety of mechanisms. Thus, of two sound waves transmitted with identical intensities but at different frequencies, the intensity of the wave with the higher frequency that reaches a certain depth is smaller than that of the wave with the lower frequency. In other words, increased frequency translates into smaller imaging depth."

    },
    {
        
    "question": "After capturing the image shown in Figure 1-1A,another image was obtained by increasing imaging (Fig. 1-1B). Figure 1-1B has:",
    "options": [
        " Bigger imaging depth.",
        " Better temporal resolution.",
        " Better spatial resolution.",
        " Less acoustic shadowing."



        
    ],
        "questionImage" : "images/21.jpg"   , 
       "answer":  " Better spatial resolution.",
        
        "explanation": "   Figure 1-1B was obtained using higher frequency, which equates to smaller wavelength that allows differentiation between two distinct objects located closer to each other. Thus, Figure 1-1B has better spatial resolution.          ",
    
    
    
    
    
    },
    {
        "question": "  After capturing the image shown in Figure 1-2A, another image was obtained by switching to the harmonic mode (Fig. 1-2B). Figure 1-2B was created from reflections of ultrasound of:    ",
"options": [
        " Double the frequency of the transmitted waves.",
        " Half the frequency of the transmitted waves.",
        " Same frequency of the transmitted waves generated by resonating particles",
        " Half the frequency of the transmitted waves generated by nonlinear reflectors.   "
        
    ],  
    "questionImage" : "images/22.jpg"   , 
   
       "answer": " Double the frequency of the transmitted waves.",
        "explanation": " Harmonic imaging (or more precisely,second harmonic imaging) uses ultrasound reflections that have twice the frequency of the transmitted waves. It is also possible to use higher harmonics, such as third, fourth, and so on for image formation, but typically only second harmonic imaging is available in commercial systems, because higher harmonic images are noisier and have not been shown to be useful        ",
    
    
    
    
    
    },
    {
        "question": " After capturing the image shown in Figure 1-3A,another image was obtained by reducing imaging depth (Fig. 1-3B). Which of the two images has a lower rate?",
"options": [
        "  Figure 1-3A..",
        " Figure 1-3B.",
        "  Both image sequences have identical frame rates.",
        " . Impossible to determine without knowing how wavelength responded to the change   "
        
    ],        "answer": "  Figure 1-3A..", 
    "questionImage" : "images/23.jpg"   , 

        "explanation": "To increase the frame rate, the operator should decrease imaging depth, as it takes less time for ultrasound waves to reach more superficial structures and return to the transducer. Thus, it takes less time to create and image with smaller depth and, consequently, more frames can be created every second, resulting in a higher frame rate.",
    
    
    
    
    
    },


   
    {
        "question": "After capturing the image sequence shown in Figure 1-4A, another sequence was obtained by reducing the sector angle (Fig. 1-4B). The sequence in Figure 1-4B has:",
        "options": ["Better spatial resolution.", "Lower temporal resolution.", "Higher frame rate.", "More scan lines per pixel."],
        "answer": "Higher frame rate.",
        "explanation": "By reducing the sector angle, one reduces the number of scan lines used to generate an image. This results in shorter total time necessary to transmit waves and then receive and process the reflections, translating into a larger number of frames per second, or higher frame rate.",
        "questionImage": "images/24.jpg"
    },
    {
        "question": "M-mode imaging does NOT:",
        "options": ["Display ultrasound reflections along a single scan line over time.", "Display power spectrum of velocities measured along a single scan line over time.", "Have higher temporal resolution than two-dimensional imaging.", "Allow simultaneous visualization of different anatomical structures."],
        "answer": "Display power spectrum of velocities measured along a single scan line over time.",
        "explanation": "M-mode imaging does not display power spectrum of velocities measured along a single scan line over time, which can be obtained using the spectral Doppler mode. It displays ultrasound reflections along a single scan line over time and has higher temporal resolution than two-dimensional imaging.",
        "questionImage": "images/25.jpg"
    },
    {
        "question": "Spectral Doppler imaging does NOT:",
        "options": ["Display ultrasound reflections along a single scan line over time.", "Display power spectrum of velocities measured along a single scan line over time.", "Provide information about the distribution of flow velocities.", "Display ultrasound reflections along multiple scan lines simultaneously."],
        "answer": "Display ultrasound reflections along a single scan line over time.",
        "explanation": "Spectral Doppler imaging does not display ultrasound reflections along a single scan line over time, which is what the M-mode does. It displays the power spectrum of velocities measured along a single scan line over time, providing information about the distribution of flow velocities.",
        "questionImage": "images/26.jpg"
    },
    {
        "question": "Continuous spectral Doppler imaging displays the strength of each velocity component by assigning to them:",
        "options": ["Different gray-scale levels.", "Different heights of the deflections.", "Different slopes of the deflections.", "Different colors in the color Doppler image."],
        "answer": "Different gray-scale levels.",
        "explanation": "Continuous spectral Doppler imaging displays the strength of each velocity component by assigning to them different gray-scale levels. The brightness of each point indicates how predominant the specific velocity is at that moment.",
        
    },
    {
        "question": "The color pattern characterizing turbulent flow in this color-flow Doppler image can be described as:",
        "options": ["Disorganized.", "Spiral-shaped.", "Mosaic.", "Monotone."],
        "answer": "Mosaic.",
        "explanation": "The color pattern characterizing turbulent flow in color-flow Doppler imaging can be described as mosaic. This is a common term used frequently by echocardiographers.",
        "questionImage": "images/28.jpg"
    },
    {
        "question": "“Laminar flow” in a blood vessel means that flow velocities are:",
        "options": ["Completely disorganized and do not follow the laws of hydrodynamics.", "Highest along the central axis of the vessel and gradually decrease toward the walls.", "Zero everywhere along the central axis and maximum at the vessel walls.", "The same everywhere."],
        "answer": "Highest along the central axis of the vessel and gradually decrease toward the walls.",
        "explanation": "“Laminar” in Latin means “smooth” or “regular.” Laminar flow in a blood vessel refers to a smooth flow pattern where flow velocities are highest along the central axis of the vessel and gradually decrease toward the walls.",
        
    },
    {
        "question": "Phased-array transducers use differences in phase of pulses transmitted by individual elements to:",
        "options": ["Allow imaging the heart throughout the different phases of the cardiac cycle.", "Steer the ultrasound beam in different directions and thus scan a “slice” rather than a single line.", "Interrogate a range of flow velocities inside the heart by determining phase shifts caused by moving targets.", "Quickly switch the transducer between transmit and receive phases."],
        "answer": "Steer the ultrasound beam in different directions and thus scan a “slice” rather than a single line.",
        "explanation": "Phased-array transducers use differences in phase of pulses transmitted by individual elements to steer the ultrasound beam in different directions, allowing the scanning of a “slice” rather than a single line.",
       
    },
    {
        "question": "Echocardiographic contrast agents are based on the idea that ultrasound reflection is augmented by:",
        "options": ["High content of gas in microbubbles.", "Added gas-liquid interface in the presence of microbubbles.", "High speed of sound waves in gas.", "Rapid motion of the microbubbles in blood."],
        "answer": "Added gas-liquid interface in the presence of microbubbles.",
        "explanation": "Echocardiographic contrast agents are based on the idea that ultrasound reflection is increased by the added gas-liquid interface in the presence of microbubbles.",
    },
    {
        "question": "One well-known artifact of ultrasound imaging is frequently referred to as “acoustic shadowing.” The main cause of this artifact is the inability of the imaging system to accurately compensate for:",
        "options": ["Increased attenuation by a structure such as a ventricular cavity.", "Reduced attenuation by structures such as a ventricular cavity.", "Increased attenuation by structures such as a contrast-filled ventricular cavity.", "Increased attenuation secondary to a temporary surge in frequency associated with the presence of contrast material."],
        "answer": "Increased attenuation by structures such as a contrast-filled ventricular cavity.",
        "explanation": "The main source of acoustic shadowing is the inability of the imaging system to accurately compensate for increased attenuation by a structure such as a contrast-filled ventricular cavity.",
        "questionImage": "images/32.jpg"
    },
    {
        "question": "Shadowing artifacts can be effectively reduced by:",
        "options": ["Lower compression setting.", "Lower overall gain.", "Higher transmit power that destroys microbubbles.", "Less contrast material."],
        "answer": "Less contrast material.",
        "explanation": "Shadowing artifacts can be effectively reduced by using less contrast material.",
        "questionImage": "images/33.jpg"
    }



    // باقي الأسئلة هنا ...


        
        
    ]
    
   
    
    
    
    



