import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const plans = [
    {
      name: "Free Plan",
      description: "Perfect for getting started",
      price: "$0",
      features: [
        "Boost engagement with target responses",
        "Automate comment replies to enhance audience interaction",
        "Turn followers into customers with targeted messaging",
      ],
      cta: "Get Started",
      isPremium: false,
    },
    {
      name: "Smart AI Plan",
      description: "Advanced features for power users",
      price: "$99",
      features: [
        "All features from Free Plan",
        "AI-powered response generation",
        "Advanced analytics and insights",
        "Priority customer support",
        "Custom branding options",
      ],
      cta: "Upgrade Now",
      isPremium: true,
    },
  ];

  return (
    <main>
      <section className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-bg">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative">
          <div className="container px-4 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center font-bold">
                  li
                </div>
                <span className="text-xl font-semibold text-primary-foreground">
                  Slide
                </span>
              </div>
              <nav className="hidden space-x-6 text-sm text-blue-200 md:block">
                <Link href="#features">Features</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#about">About</Link>
              </nav>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                <Link href="/dashboard">Login</Link>
              </Button>
            </div>

            <div className="mx-auto mt-16 max-w-3xl text-center">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Transform Your Instagram Engagement with Slide
              </h1>

              <p className="mt-6 text-lg text-blue-200">
                Slide revolutionizes how you connect with your audience on
                Instagram. Automate responses and boost engagement effortlessly,
                turning interactions into valuable business opportunities.
              </p>

              <div className="mt-8 flex justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400 hover:bg-blue-900/50"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-40 md:h-80 w-full mt-10">
              <Image
                src="/Ig-creators.png"
                alt="Community member"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Choose Your Plan
            </h2>
            <p className="max-w-[900px] text-muted-foreground">
              Select the perfect plan to boost your Instagram engagement
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 md:gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative flex flex-col justify-between shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 ${
                  plan.isPremium
                    ? "p-[1px] bg-gradient-to-r from-blue-500 via-blue-200 to-blue-100"
                    : ""
                }`}
              >
                <div
                  className={`flex flex-col h-full bg-card text-card-foreground ${
                    plan.isPremium ? "rounded-lg p-6" : "p-4"
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      {plan.name}
                    </CardTitle>
                    <CardDescription
                      className={
                        plan.isPremium
                          ? "text-blue-400"
                          : "text-muted-foreground"
                      }
                    >
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="text-4xl font-extrabold">
                      {plan.price}
                      <span
                        className={`text-lg font-normal ml-1 ${
                          plan.isPremium
                            ? "text-muted-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        /month
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle
                            className={`mr-2 h-5 w-5 ${
                              plan.isPremium ? "text-primary" : "text-primary"
                            }`}
                          />
                          <span
                            className={
                              plan.isPremium
                                ? "text-muted-foreground"
                                : "text-muted-foreground"
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex">
                    <Button
                      className={`w-full text-lg py-3 font-semibold rounded-md flex ${
                        plan.isPremium
                          ? "bg-blue-700 text-white hover:bg-blue-600"
                          : "bg-primary text-white hover:bg-primary-dark"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}