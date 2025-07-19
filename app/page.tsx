import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Play, Users, Award, Heart, Music, TrendingUp, Zap, Sparkles } from "lucide-react"
import Image from "next/image"

export default function DanceSchoolHistory() {
  const timelineEvents = [
    {
      year: "2000-2004",
      title: "The Beginning",
      description:
        "Our humble start with just a few passionate dancers and a dream to bring movement and joy to the community.",
      icon: <Heart className="w-6 h-6" />,
      videoEmbed: (
        <div className="aspect-w-16 aspect-h-10">
          <iframe
            src="https://drive.google.com/file/d/117BdggLPX71VbCpW3K48MYRPpgFAFofg/preview"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full rounded-lg border-0"
            title="Motion Control Dance - The Beginning (2000-2004)"
          ></iframe>
        </div>
      ),
    },
    {
      year: "2004-2008",
      title: "Growing Strong",
      description:
        "Expanding our classes, welcoming new instructors, and establishing our signature style that would define us.",
      icon: <Users className="w-6 h-6" />,
      videoEmbed: (
        <div className="aspect-w-16 aspect-h-10">
          <iframe
            src="https://drive.google.com/file/d/1szm5okk6R0aIdpOSyu8nxU6Mw2764ZJ_/preview"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full rounded-lg border-0"
            title="Motion Control Dance - Growing Strong (2004-2008)"
          ></iframe>
        </div>
      ),
    },
    {
      year: "2008-2011",
      title: "Recognition & Awards",
      description:
        "Achieving recognition in regional competitions and building partnerships with local schools and organizations.",
      icon: <Award className="w-6 h-6" />,
      videoEmbed: (
        <div className="aspect-w-16 aspect-h-10">
          <iframe
            src="https://drive.google.com/file/d/1TQi8v4MgpJrADh4KvXJRnaYXu8bOwgJF/preview"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full rounded-lg border-0"
            title="Motion Control Dance - Recognition & Awards (2008-2011)"
          ></iframe>
        </div>
      ),
    },
    {
      year: "2011-2014",
      title: "Community Impact",
      description:
        "Becoming a cornerstone of the community with annual festivals, charity performances, and outreach programs.",
      icon: <Music className="w-6 h-6" />,
      videoEmbed: (
        <div className="aspect-w-16 aspect-h-10">
          <iframe
            src="https://drive.google.com/file/d/18npGdcIlrJO8fdYeXdNXk5bDtf4VUADb/preview"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full rounded-lg border-0"
            title="Motion Control Dance - Community Impact (2011-2014) - Link Issue"
          ></iframe>
        </div>
      ),
    },
    {
      year: "2015-2017",
      title: "New Heights",
      description: "Pushing boundaries and reaching new milestones with innovative performances and collaborations.",
      icon: <Star className="w-6 h-6" />,
      videoEmbed: (
        <div className="aspect-w-16 aspect-h-10">
          <iframe
            src="https://drive.google.com/file/d/1t0vTdT2hX0cS2s-uMrOo097e4OrpgW1p/preview"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full rounded-lg border-0"
            title="Motion Control Dance - 2015-2017 Highlights"
          ></iframe>
        </div>
      ),
    },
    {
      year: "2017-2019",
      title: "Continued Growth",
      description:
        "Further expanding our reach and impact, introducing new programs and engaging more of the community.",
      icon: <TrendingUp className="w-6 h-6" />,
      videoEmbed: (
        <div className="aspect-w-16 aspect-h-10">
          <iframe
            src="https://drive.google.com/file/d/1c9HzwebN9j-CcDKaG5FG4wlF6d2sRWVT/preview"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full rounded-lg border-0"
            title="Motion Control Dance - Continued Growth (2017-2019)"
          ></iframe>
        </div>
      ),
    },
    {
      year: "2020-2023",
      title: "Adapting & Innovating",
      description:
        "Navigating new challenges with resilience and creativity, finding new ways to connect and dance together.",
      icon: <Zap className="w-6 h-6" />,
      videoEmbed: (
        <div className="aspect-w-16 aspect-h-10">
          <iframe
            src="https://drive.google.com/file/d/1aDr0Z2WbOPmet-96WYHq_76Iy3G9B0hg/preview"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full rounded-lg border-0"
            title="Motion Control Dance - Adapting & Innovating (2020-2023)"
          ></iframe>
        </div>
      ),
    },
    {
      year: "2023-2025",
      title: "The Road to 25 & Beyond!",
      description:
        "Celebrating our legacy as we approach our 25th anniversary and look forward to many more years of dance.",
      icon: <Sparkles className="w-6 h-6" />,
      videoEmbed: (
        <div className="aspect-w-16 aspect-h-10">
          <iframe
            src="https://drive.google.com/file/d/1i3_ZcjWjxTbyvYX36PbXFZVrigGLbG-s/preview"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full rounded-lg border-0"
            title="Motion Control Dance - The Road to 25 & Beyond! (2023-2025)"
          ></iframe>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-400/20"></div>
        <div className="absolute top-10 left-10 text-green-300/30 animate-pulse">
          <Star className="w-8 h-8" />
        </div>
        <div className="absolute top-20 right-20 text-green-300/30 animate-pulse delay-300">
          <Star className="w-6 h-6" />
        </div>
        <div className="absolute bottom-20 left-20 text-green-300/30 animate-pulse delay-700">
          <Star className="w-10 h-10" />
        </div>
        <div className="absolute bottom-10 right-10 text-green-300/30 animate-pulse delay-500">
          <Star className="w-7 h-7" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 text-lg">
            25 Years of Motion Control Dance
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 tracking-wide">
            OUR <span className="text-green-600">DANCE</span> JOURNEY
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to community celebrations - explore 25 years of passion, movement, and unforgettable
            moments that shaped our dance family.
          </p>

          {/* Featured Poster and Schedule */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
              <div className="relative">
                <Image
                  src="/images/dance-festival-poster.png"
                  alt="Family Dance Festival Poster"
                  width={400}
                  height={600}
                  className="rounded-lg shadow-2xl mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
              <div className="relative">
                <Image
                  src="/images/festival-schedule.png"
                  alt="Family Dance Festival Schedule"
                  width={400}
                  height={600}
                  className="rounded-lg shadow-2xl mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Festival Script Link */}
          <div className="mt-6">
            <a
              href="data:text/plain;charset=utf-8,MCD Festival Script 2025%0A%0AEntrance%0AGentle music playing as the public enter the park for 15 mins%0A%0AIntroduction%0AThank you for coming to the Motion Control Dance Family Dance Festival. We are delighted to be celebrating with you today, and we hope you have fun dancing with us in the park.%0A%0AThe award-winning community dance charity that we have today began back in October 2000 with a street dance class taught by our founder, Emma Mallam, at Buttrills Community Centre. These sessions moved into the YMCA in June 2001, and 25 years on, we still have a wonderful working partnership with the YMCA, with the lease of our community studio as its charity base. Motion Control Dance is now the thriving community hub of dance and movement that Emma dreamt of creating.%0A%0AThe highly professional and experienced dance practitioners teach all these sessions at our studio and collectively have a wealth of 50+ years' experience in teaching community dance to all ages and abilities. The A Team of staff members from Motion Control Dance will be leading you all on a journey through movement today as we celebrate this huge milestone of community dance in the Vale, as well as celebrating the 10th anniversary of the MCD charity, enriching lives in the Vale through movement.%0A%0A[Continue with full script content...]"
              download="MCD_Festival_Script_2025.txt"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-lg underline decoration-2 underline-offset-4 hover:decoration-green-700 transition-colors duration-200"
            >
              📄 MCD Festival Script
            </a>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-green-600">History</span> Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Journey through the decades and witness how we've grown from a small dance studio to a beloved community
              institution.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-green-600 rounded-full"></div>

            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative mb-16 ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"}`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white z-10">
                  {event.icon}
                </div>

                {/* Content Card */}
                <Card
                  className={`${index % 2 === 0 ? "md:mr-8" : "md:ml-8"} mt-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Badge variant="outline" className="text-green-600 border-green-600 font-bold text-lg px-4 py-1">
                        {event.year}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{event.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>

                    {/* Video Section */}
                    {event.videoEmbed ? (
                      event.videoEmbed
                    ) : (
                      <div className="relative bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-8 border-2 border-dashed border-green-300 hover:border-green-400 transition-colors duration-200">
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4 shadow-lg">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                          <h4 className="font-semibold text-gray-800 mb-2">Video Section</h4>
                          <p className="text-gray-600 text-sm mb-4">{event.videoPlaceholder}</p>
                          <Button
                            variant="outline"
                            className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white bg-transparent"
                          >
                            Add Video Content
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Be Part of Our Story</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join us next season for a Chance to Dance - make sure you register for the class of your choice and become
            part of the Motion Control Dance family.
          </p>

          <div className="justify-center">
            <a
              href="https://www.motioncontroldance.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg"
              >
                Learn More About Us
              </Button>
            </a>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg opacity-80">Visit us at</p>
            <p className="text-2xl font-bold">www.motioncontroldance.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Sponsors Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-green-400 mb-6">Thank You to Our Sponsors</h3>
            <p className="text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              A huge thank you to our event sponsors - ACT, Mr Tees, Vale Youth Service, Legal & General, Case Cafe,
              Fablas Ice cream, Snap Fitness, Vale Council - Events Team, Vale Arts Development Officer, Vale Healthy
              Living Team, and St Johns Ambulance without your support this event would not have been possible.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/sponsors/act-new.png"
                  alt="ACT"
                  width={120}
                  height={60}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/sponsors/mr-tees.avif"
                  alt="Mr Tees"
                  width={120}
                  height={60}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/sponsors/vale-youth-service-new.jpeg"
                  alt="Vale Youth Service"
                  width={120}
                  height={60}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/sponsors/legal-general-new.png"
                  alt="Legal & General"
                  width={120}
                  height={60}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/sponsors/case-cafe-new.png"
                  alt="Case Cafe"
                  width={120}
                  height={60}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/sponsors/fablas-new.webp"
                  alt="Fablas Ice Cream"
                  width={120}
                  height={60}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/sponsors/snap-fitness.jpeg"
                  alt="Snap Fitness"
                  width={120}
                  height={60}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/sponsors/vale-of-glamorgan-new.png"
                  alt="Vale Council"
                  width={120}
                  height={60}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/sponsors/st-john-ambulance-new.jpeg"
                  alt="St Johns Ambulance"
                  width={120}
                  height={60}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/sponsors/bbc-children-in-need-new.png"
                  alt="BBC Children in Need"
                  width={120}
                  height={60}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="text-center border-t border-gray-700 pt-8">
            <div className="flex justify-center items-center mb-6">
              <Music className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold">Motion Control Dance</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Celebrating 25 years of bringing joy, movement, and community together through dance.
            </p>
            <p className="text-sm text-gray-500">© 2025 Motion Control Dance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
