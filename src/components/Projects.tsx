import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
    {
        title: "VFS - Virtual File System",
        description: "A file system virtualization, simulating how the filesystem of Fat32 works.",
        tech: "C++",
        link: "https://github.com/yakov103/Ex7-os",
    },
    {
        title: "Politi-Cal",
        description: "Android App developed in Kotlin, using Firestore for storing the data and cloud function as a replacement for server. ",
        tech: "Kotlin",
        link: "https://github.com/dolev146/Politi-Cal",
    },
    {
        title: "Travel Salesman Person - TSP Algorithm",
        description: "A group project with 4 team members, including algorithm tsp and ui with python, managing algorithm and data flows.",
        tech: "Python",
        link: "https://github.com/dolev146/Ex4_OOP",
    },
    {
        title: "Microservices Cloud Computing",
        description: "A group project with 3 team members, including services for web-scraping, Redis cache, Kafka on Docker.",
        tech: "Docker",
        link: "https://github.com/dolev146/BigData-Cloud-Computing-project",
    },
]

const techColors = {
    "React": "bg-blue-500",
    "React Native": "bg-green-500",
    "Vue.js": "bg-purple-500",
    "C++" : "bg-pink-500",
    "Kotlin": "bg-purple-500",
    "Python": "bg-blue-500",
    "Docker": "bg-gray-500",
}

export const Projects = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <Link
                                    href={p.link}
                                    className="font-semibold text-primary hover:underline"
                                >
                                    {p.title}
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    {p.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech as keyof typeof techColors]
                                            )}
                                        />
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {p.tech}
                                        </span>
                                    </div>
                                    <Link
                                        href={p.link}
                                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        View Project
                                        <ExternalLink className="inline-block size-3" />
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}
