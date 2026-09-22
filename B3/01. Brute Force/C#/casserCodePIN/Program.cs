using System;
using System.Threading;

namespace CasserCodePIN
{
    class Program
    {
        public static void Main(string[] args)
        {
            int itération = 150;
            List<TimeSpan> tempMoyen = new();


            for (int j = 0; j < itération; j++)
            {
                
            
                // start représente l'heure de démarrage du programme
                DateTime start = DateTime.Now;
                Console.WriteLine("Début du programme");
                // ...

                Random rnd = new Random();
                // Code secret compris entre 0 et 9999
                int codeSecret = rnd.Next(999999);

                bool trouve = false;

                int i = 0;
                while (i < 999999+1 && trouve == false)
                {
                    //Thread.Sleep(5);
                    //Console.Write(i + " ");
                    if (i == codeSecret)
                    {
                        trouve = true;
                        break;
                    }
                    i++;
                }

                Console.Write("Code pin trouvée ! => " + i + "\n");

                // ...
                Console.WriteLine("Fin du programme");
                // durée du programme = heure de fin - heure de démarrage
                TimeSpan duree = DateTime.Now - start;
                Console.WriteLine("durée du programme : " + duree);
                tempMoyen.Add(duree);

                
            }

            TimeSpan moyenne = tempMoyen.Any()
                ? TimeSpan.FromTicks((long)tempMoyen.Average(t => t.Ticks))
                : TimeSpan.Zero;

            Console.Write("\ntemps moyen => " + moyenne + "\n");

            Console.Write("Press any key to continue . . . ");
            Console.ReadKey(true);
        }
    }
}