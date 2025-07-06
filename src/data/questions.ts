export interface Question {
  id: number;
  myth: string;
  fact: string;
  explanation: string;
  source: string;
}

const MAYO_CLINIC_URL = "https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-myths/art-20485720";

export const questions: Question[] = [
  {
    "id": 1,
    "myth": "Hand sanitizers cannot be used often as they create resistance in germs",
    "fact": "Hand sanitizers can be used often",
    "explanation": "Unlike antibiotics, alcohol-based sanitizers do not lead to resistance in germs, so they can be used frequently without concern.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#sanitizer"
  },
  {
    "id": 2,
    "myth": "Alcohol-based sanitizers are unsafe and harmful for people",
    "fact": "Alcohol-based sanitizers are safe for everyone to use",
    "explanation": "These sanitizers do not cause significant health problems; adverse effects like skin irritation are rare.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#alcohol-sanitizer"
  },
  {
    "id": 3,
    "myth": "Alcohol-based sanitizers are forbidden in religions where alcohol is not allowed",
    "fact": "Alcohol-based sanitizers can be used in religions where alcohol is prohibited",
    "explanation": "Medical use of alcohol, like in sanitizers, is permitted as it is for health and not consumption.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#alcohol-sanitizer-religion"
  },
  {
    "id": 4,
    "myth": "The amount of alcohol-based sanitizer you use does not matter",
    "fact": "The amount of alcohol-based sanitizer you use matters",
    "explanation": "Using enough sanitizer to cover all hand surfaces ensures proper disinfection.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#sanitizer-amount"
  },
  {
    "id": 5,
    "myth": "Wearing gloves is safer than cleaning your hands frequently",
    "fact": "It is safer to frequently clean your hands and not wear gloves",
    "explanation": "Gloves can spread germs between surfaces; cleaning hands is more effective.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#clean-hands"
  },
  {
    "id": 6,
    "myth": "Touching a communal sanitizer bottle will infect you",
    "fact": "Touching a communal bottle of alcohol-based sanitizer will not infect you",
    "explanation": "Once your hands are sanitized, germs are removed, including any from the bottle.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#sanitizer-bottle"
  },
  {
    "id": 7,
    "myth": "Alcohol-based handrubs are not essential medicines",
    "fact": "An alcohol-based handrub is listed as a WHO essential medicine",
    "explanation": "Hand cleaning is key to preventing infections and is vital in healthcare and the community.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#sanitizer-medicine"
  },
  {
    "id": 8,
    "myth": "Vitamin and mineral supplements can cure COVID-19",
    "fact": "Vitamin and mineral supplements cannot cure COVID-19",
    "explanation": "Micronutrients support immunity, but they are not cures for COVID-19.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#supplements"
  },
  {
    "id": 9,
    "myth": "Water or swimming does transmit the COVID-19 virus",
    "fact": "Water or swimming does not transmit the COVID-19 virus",
    "explanation": "The virus does not spread through water but through close contact with infected people.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#swimming"
  },
  {
    "id": 10,
    "myth": "Shoes commonly spread COVID-19",
    "fact": "The likelihood of shoes spreading COVID-19 is very low",
    "explanation": "Shoes are unlikely to spread COVID-19, but removing them at home can help keep floors cleaner.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#shoes"
  },
  {
    "id": 11,
    "myth": "COVID-19 is caused by bacteria, not a virus",
    "fact": "COVID-19 is caused by a virus, not a bacteria",
    "explanation": "COVID-19 is a viral disease; antibiotics don’t work unless there’s a secondary bacterial infection.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#virus"
  },
  {
    "id": 12,
    "myth": "Prolonged use of masks causes CO2 poisoning or oxygen deficiency",
    "fact": "The prolonged use of medical masks when properly worn does not cause CO2 intoxication nor oxygen deficiency",
    "explanation": "Medical masks are designed to allow normal breathing and do not cause CO2 buildup or oxygen issues.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#oxygen"
  },
  {
    "id": 13,
    "myth": "Drinking alcohol protects you from COVID-19",
    "fact": "Drinking alcohol does not protect you against COVID-19",
    "explanation": "Drinking alcohol does not prevent COVID-19 and can increase other health risks.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#alcohol"
  },
  {
    "id": 14,
    "myth": "Eating hot pepper prevents or cures COVID-19",
    "fact": "Adding pepper to your soup or other meals does not prevent or cure COVID-19",
    "explanation": "Hot pepper may be tasty, but it has no protective or curative effect for COVID-19.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#pepper"
  },
  {
    "id": 15,
    "myth": "Spraying or drinking disinfectants protects against COVID-19",
    "fact": "Spraying and introducing bleach or another disinfectant into your body will not protect you against COVID-19",
    "explanation": "Disinfectants can poison or burn you; they should only be used on surfaces.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#bleach"
  },
  {
    "id": 16,
    "myth": "Drinking methanol, ethanol, or bleach prevents or cures COVID-19",
    "fact": "Drinking methanol, ethanol or bleach does not prevent or cure COVID-19",
    "explanation": "These substances are toxic and can cause serious harm or death.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#methanol"
  },
  {
    "id": 17,
    "myth": "Sun or heat over 25°C prevents COVID-19",
    "fact": "Exposing yourself to the sun or temperatures higher than 25°C does not protect you from COVID-19",
    "explanation": "COVID-19 spreads in any climate, including hot areas.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#sun"
  },
  {
    "id": 18,
    "myth": "COVID-19 cannot spread in hot and humid climates",
    "fact": "The COVID-19 virus can spread in hot and humid climates",
    "explanation": "Hot and humid weather does not stop COVID-19 transmission.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#climate"
  },
  {
    "id": 19,
    "myth": "Cold weather and snow kill COVID-19",
    "fact": "Cold weather and snow cannot kill the COVID-19 virus",
    "explanation": "Cold temperatures do not kill the virus; body temperature stays stable.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#cold-weather"
  },
  {
    "id": 20,
    "myth": "COVID-19 spreads through mosquito bites",
    "fact": "The COVID-19 virus cannot be spread through mosquito bites",
    "explanation": "COVID-19 spreads through droplets, not by mosquitoes.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#mosquito-bites"
  },
  {
    "id": 21,
    "myth": "Hand dryers kill COVID-19",
    "fact": "Hand dryers are not effective in killing the COVID-19 virus",
    "explanation": "Cleaning your hands with sanitizer or soap is what removes the virus; hand dryers alone do not kill it.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#hand-dryers"
  },
  {
    "id": 22,
    "myth": "Only older people can be infected by COVID-19",
    "fact": "People of all ages can be infected by the COVID-19 virus",
    "explanation": "Anyone can get COVID-19, but older people and those with pre-existing conditions are at higher risk of severe illness.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#older-people"
  },
  {
    "id": 23,
    "myth": "Antibiotics can prevent or treat COVID-19",
    "fact": "Antibiotics cannot prevent or treat COVID-19",
    "explanation": "COVID-19 is caused by a virus, and antibiotics are only effective against bacterial infections.",
    "source": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters#swimming"
  },
  {
    "id": 24,
    "myth": "COVID-19 vaccines commonly cause heart issues, blood clots, or strokes",
    "fact": "COVID-19 vaccines do not generally cause heart problems, blood clots, or strokes",
    "explanation": "The risk of these conditions is higher with COVID-19 infection than vaccination; vaccine complications are rare.",
    "source": "https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-myths/art-20485720#:~:text=The%20COVID%2D19%20vaccines%20available%20in%20the%20U.S.%20do%20not%20cause%20blood%20clots."
  },
  {
    "id": 25,
    "myth": "You can get COVID-19 from Pfizer, Moderna, or Novavax vaccines",
    "fact": "COVID-19 vaccines cannot give you COVID-19",
    "explanation": "These vaccines contain no live virus, only instructions or proteins to help your body build immunity.",
    "source": "https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-myths/art-20485720#:~:text=No.%20Pfizer%20and%20Moderna%20COVID%2D19%20vaccines%20only%20give%20your%20cells%20instructions"
  },
  {
    "id": 26,
    "myth": "COVID-19 vaccines cause infertility",
    "fact": "COVID-19 vaccines do not cause infertility",
    "explanation": "Studies show no link between the vaccine and infertility; temporary menstrual changes may occur but do not affect fertility.",
    "source": "https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-myths/art-20485720#:~:text=COVID%2D19%20vaccines%20do%20not%20cause%20fertility%20problems."
  },
  {
    "id": 27,
    "myth": "COVID-19 vaccines contain microchips to track people",
    "fact": "COVID-19 vaccines do not contain microchips",
    "explanation": "Vaccines only include ingredients to help the immune system; no tracking devices are inside.",
    "source": "https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-myths/art-20485720#:~:text=It%20is%20a%20myth%20that%20COVID%2D19%20vaccines%20have%20microchips"
  },
  {
    "id": 28,
    "myth": "COVID-19 vaccines change your DNA",
    "fact": "COVID-19 vaccines do not affect or change your DNA",
    "explanation": "mRNA vaccines do not enter the cell nucleus where your DNA is located.",
    "source": "https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-myths/art-20485720#:~:text=No.%20COVID%2D19%20vaccines%20cannot%20affect%20your%20DNA."
  },
  {
    "id": 29,
    "myth": "It’s safer to get COVID-19 than to get vaccinated",
    "fact": "It is safer to get vaccinated than to catch COVID-19",
    "explanation": "Vaccination lowers risk of serious illness and long-term effects compared to infection.",
    "source": "https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-myths/art-20485720#:~:text=No.%20Unless%20your%20healthcare%20professional%20has%20said%20to%20avoid%20it"
  },
  {
    "id": 30,
    "myth": "Hot or cold temperatures stop COVID-19",
    "fact": "Temperature does not prevent COVID-19",
    "explanation": "COVID-19 spreads in all climates and weather conditions.",
    "source": "https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-myths/art-20485720#:~:text=It%20is%20a%20myth%20that%20hot%20or%20cold%20temperatures%20can%20keep%20you%20from%20catching%20the%20COVID%2D19%20virus."
  },
  {
    "id": 31,
    "myth": "Certain foods or supplements can prevent or treat COVID-19",
    "fact": "No food, drink, or supplement can prevent or cure COVID-19",
    "explanation": "Only vaccines and precautions help prevent COVID-19; foods or supplements do not.",
    "source": "https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-myths/art-20485720#:~:text=Dietary%20or%20herbal%20supplements%20are%20not%20recommended%20to%20prevent%20or%20treat%20COVID%2D19."
  },
  {
    "id": 32,
    "myth": "COVID-19 spreads through 5G or wireless networks",
    "fact": "COVID-19 does not spread via mobile networks",
    "explanation": "The virus spreads person-to-person, not via radio waves or networks.",
    "source": "https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-myths/art-20485720#:~:text=Viruses%20can%20only%20spread%20between%20living%20beings"
  },
  {
    "id": 33,
    "myth": "Pneumonia or flu vaccines protect against COVID-19",
    "fact": "Pneumonia and flu vaccines do not prevent COVID-19",
    "explanation": "Vaccines protect against specific infections, not COVID-19 unless designed for it.",
    "source": "https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-myths/art-20485720#:~:text=No.%20Vaccines%20are%20made%20to%20protect%20against%20a%20specific%20germ."
  },
  {
    "id": 34,
    "myth": "UV lights are the best way to prevent COVID-19 at home",
    "fact": "UV lights are not recommended for preventing COVID-19 in homes",
    "explanation": "UV lights can pose safety risks and their effectiveness at home is unclear.",
    "source": "https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-myths/art-20485720#:~:text=Some%20types%20of%20UV%20light%20are%20used%20to%20disinfect%20surfaces"
  },
  {
    "id": 35,
    "myth": "Disinfectants can be applied to or ingested into the body to kill COVID-19",
    "fact": "Disinfectants should not be applied to or ingested by the body",
    "explanation": "Disinfectants are meant for surfaces and are dangerous if used on or inside the body.",
    "source": "https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-myths/art-20485720#:~:text=No.%20When%20applied%20to%20surfaces%2C%20disinfectants%20can%20help%20kill%20germs"
  }
];