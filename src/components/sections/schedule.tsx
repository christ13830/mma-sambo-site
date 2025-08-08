
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const scheduleData = [
  { day: "Lundi", time: "20:00 - 22:00", course: "SAMBO MMA", location: "La Bedoule" },
  { day: "Jeudi", time: "19:15 - 21:15", course: "SAMBO MMA", location: "La Ciotat" },
  { day: "Samedi", time: "09:00 - 10:00", course: "Cross Training", location: "La Ciotat" },
  { day: "Samedi", time: "10:15 - 12:15", course: "SAMBO MMA", location: "La Ciotat" },
];

export function Schedule() {
  return (
    <section id="horaires" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Horaires des Cours</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
            Trouvez le cours qui correspond à votre niveau et à vos objectifs.
          </p>
        </div>
        <div className="mx-auto max-w-4xl mt-8">
          <div className="rounded-lg border bg-card text-card-foreground shadow-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Jour</TableHead>
                  <TableHead>Heure</TableHead>
                  <TableHead>Cours</TableHead>
                  <TableHead className="text-right">Lieu</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {scheduleData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.day}</TableCell>
                    <TableCell>{item.time}</TableCell>
                    <TableCell>{item.course}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={
                        item.course.includes("Cross") ? "destructive" : "default"
                      }>{item.location}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}
