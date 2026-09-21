### Étape1:

```bash
curl --request GET \
  --url http://172.16.3.254:8001/bienvenue
```

```json
{
  "etape": "Etape 1: Introduction",
  "message": "Bienvenue dans le jeu de piste HTTP !",
  "cours": "Le protocole HTTP (Hypertext Transfer Protocol) est utilisé pour la communication sur le web. Il est indispensable de maitriser ce protocole pour appréhender le développement web. 📖 https://www.it-connect.fr/le-protocole-http-pour-les-debutants/",
  "next_step": "Pour passer à l'étape suivante, faites une requête GET à l'URL \"/decouverte-des-parametres\" avec un paramètre \"nom\" dans l'URL, par exemple: /decouverte-des-parametres?nom=VotreNom. Attention, le paramètre \"nom\" est obligatoire pour réussir l'étape suivante.",
  "tips": "https://developer.mozilla.org/fr/docs/Web/HTTP/Reference/Methods/GET"
}
```

### Étape 2:
```bash
curl --request GET \
  --url 'http://172.16.3.254:8001/decouverte-des-parametres?nom=Name'
```

```json
{
  "etape": "Etape 2: Paramètres dans l'URL",
  "message": "Bravo Mathis! Vous avez réussi la première étape. Maintenant, explorons l'utilisation des paramètres dans l'URL.",
  "cours": "Les paramètres dans l'URL permettent de transmettre des informations à travers les requêtes HTTP. Vous pouvez les utiliser pour personnaliser vos requêtes.",
  "success": "✅✅✅ Le paramètre \"nom\" est présent dans l'URL. Vous pouvez passer à l'étape suivante. ✅✅✅",
  "next_step": "Pour passer à l'étape suivante, vous devez faire une requête GET à l'URL \"/plusieurs-parametres\" avec un paramètre \"prenom\" dans l'URL et un paramètre \"age\".Cela vous permettra de comprendre comment les paramètres dans l'URL fonctionnent pour personnaliser vos requêtes HTTP. N'oubliez pas que les paramètres dans l'URL sont souvent utilisés pour filtrer ou personnaliser les données que vous récupérez du serveur. En utilisant ces paramètres, vous pourrez mieux comprendre comment interagir avec les API RESTful et les serveurs web. Pour plus d'informations sur les paramètres dans l'URL, vous pouvez consulter la documentation officielle de MDN : https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET"
}
```

### Étape 3:

```bash
curl --request GET \
  --url 'http://172.16.3.254:8001/plusieurs-parametres?prenom=Name&age=150'
```

```json
{
  "etape": "Méthodes HTTP - GET",
  "message": "La deuxième étape est réussie ! Maintenant, explorons l'utilisation de la méthode GET pour faire des requêtes HTTP.",
  "cours": "La méthode GET est utilisée pour récupérer des données à partir du serveur. Elle est souvent utilisée pour les requêtes de lecture.",
  "success": "✅✅✅ Vous avez utilisé la méthode GET avec les bons paramètres. Vous pouvez passer à l'étape suivante. ✅✅✅",
  "next_step": "Pour passer à l'étape suivante, vous devez faire une requête POST à l'URL \"/un-peu-de-post\"   Cela vous permettra de comprendre comment les différentes méthodes HTTP fonctionnent pour interagir avec les serveurs web. N'oubliez pas que la méthode GET est souvent utilisée pour récupérer des données du serveur, tandis que la méthode POST est utilisée pour envoyer des données au serveur. En utilisant ces méthodes avec les bons paramètres, vous pourrez mieux comprendre comment interagir avec les API RESTful et les serveurs web. Pour plus d'informations sur les méthodes HTTP et les paramètres dans l'URL, vous pouvez consulter la documentation officielle de MDN : https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET"
}
```

### Étape 4:

```bash
curl --request POST \
  --url http://172.16.3.254:8001/un-peu-de-post
```

```json
{
  "etape": "Méthodes HTTP - POST",
  "message": "La troisième étape est réussie ! Maintenant, explorons l'utilisation de la méthode POST pour faire des requêtes HTTP.",
  "cours": "La méthode POST est utilisée pour envoyer des données au serveur, souvent utilisée pour les requêtes de création.",
  "success": "✅✅✅ Vous avez utilisé la méthode POST. Vous pouvez passer à l'étape suivante. ✅✅✅",
  "next_step": "Pour passer à l'étape suivante, vous devez spécifier un type de contenu \"application/json\" dans votre requête POST à l'URL \"/5-content-type\"  Cela vous permettra de comprendre comment les en-têtes HTTP fonctionnent pour spécifier le format des données envoyées au serveur. N'oubliez pas que la méthode POST est souvent utilisée pour créer de nouvelles ressources sur le serveur, tandis que la méthode PUT est utilisée pour mettre à jour des ressources existantes. En utilisant ces méthodes avec les bons types de contenu, vous pourrez mieux comprendre comment interagir avec les API RESTful et les serveurs web. Pour plus d'informations sur les méthodes HTTP et les types de contenu, vous pouvez consulter la documentation officielle de MDN : https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST"
}
```

### Étape 5:

```bash
curl --request POST \
  --url http://172.16.3.254:8001/5-content-type \
  --header 'Content-Type: application/json'
```

```json
{
  "etape": "Type de contenu - POST",
  "message": "Vous devez spécifier le type de contenu \"application/json\".",
  "cours": "Le type de contenu indique au serveur le format des données que vous attendez en réponse. Dans une requête POST, cela peut souvent être \"application/json\" ou \"text/html\".",
  "success": "✅✅✅ Vous avez spécifié le bon type de contenu. Vous pouvez passer à l'étape suivante. ✅✅✅",
  "next_step": "Pour passer à l'étape suivante, vous devez faire une requête PUT à l'URL \"/put-method-6\" en incluant un en-tête \"Content-Type\" de type \"text/html\" et un en-tête \"Accept\" de type \"application/json\". Cela vous permettra de comprendre comment les en-têtes \"Content-Type\" et \"Accept\" fonctionnent ensemble pour spécifier le format des données envoyées et reçues. N'oubliez pas que la méthode PUT est souvent utilisée pour mettre à jour des ressources sur le serveur, tandis que la méthode POST est utilisée pour créer de nouvelles ressources. En utilisant ces méthodes avec les bons types de contenu, vous pourrez mieux comprendre comment interagir avec les API RESTful et les serveurs web. Pour plus d'informations sur les méthodes HTTP et les types de contenu, vous pouvez consulter la documentation officielle de MDN : https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT"
}
```

### Étape 6:

```bash
curl --request PUT \
  --url http://172.16.3.254:8001/put-method-6 \
  --header 'Accept: application/json' \
  --header 'Content-Type: text/html'
```

```json
{
  "etape": "Types de contenu - PUT",
  "message": "Vous avez spécifié le type de contenu text/html dans votre requête. https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/PUT",
  "cours": "Lors de l'envoi de données avec la méthode PUT, vous devez indiquer au serveur le format des données que vous envoyez. Cela est souvent spécifié avec l'en-tête \"Content-Type\".",
  "success": "✅✅✅ Vous avez spécifié le bon type de contenu et le bon en-tête Accept. Vous pouvez passer à l'étape suivante. ✅✅✅",
  "next_step": "Pour passer à l'étape suivante, vous devez faire une requête DELETE à l'URL \"/et-oui-delete\" en incluant le paramètre \"filename\" dans l'URL. Cela vous permettra de comprendre comment les paramètres dans l'URL fonctionnent avec la méthode GET pour personnaliser vos requêtes. N'oubliez pas que la méthode GET est souvent utilisée pour récupérer des données du serveur, tandis que la méthode PUT est utilisée pour mettre à jour des ressources sur le serveur. En utilisant ces méthodes avec les bons types de contenu et les bons paramètres, vous pourrez mieux comprendre comment interagir avec les API RESTful et les serveurs web. Pour plus d'informations sur les méthodes HTTP et les types de contenu, vous pouvez consulter la documentation officielle de MDN : https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE"
}
```

### Étape 7:

```bash
curl --request DELETE \
  --url 'http://172.16.3.254:8001/et-oui-delete?filename=Name'
```

```json
{
  "etape": "Paramètres dans l'URL et méthode - DELETE",
  "message": "Vous avez utilisé la méthode DELETE avec les paramètres {\"filename\":\"lol\"}.",
  "cours": "Combiner la méthode DELETE avec des paramètres dans l'URL vous permet de personnaliser davantage vos requêtes. Dans cette étape, vous avez utilisé les deux ensemble.",
  "success": "✅✅✅ Vous avez utilisé la bonne méthode et les bons paramètres. Vous pouvez passer à l'étape suivante. ✅✅✅",
  "next_step": "Pour passer à l'étape suivante, vous devez faire une requête PATCH à l'URL \"/etape8/api/users/12345\" en incluant un en-tête \"Content-Type\" de type \"application/json\". Cela vous permettra de comprendre comment les en-têtes \"Accept\" fonctionnent pour spécifier le format des données que vous attendez en réponse. N'oubliez pas que la méthode GET est souvent utilisée pour récupérer des données du serveur, tandis que la méthode DELETE est utilisée pour supprimer des ressources sur le serveur. En utilisant ces méthodes avec les bons types de contenu et les bons paramètres, vous pourrez mieux comprendre comment interagir avec les API RESTful et les serveurs web. Pour plus d'informations sur les méthodes HTTP et les types de contenu, vous pouvez consulter la documentation officielle de MDN : https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET"
}
```

### Étape 8:

```bash
curl --request PATCH \
  --url http://172.16.3.254:8001/etape8/api/users/12345 \
  --header 'Content-Type: application/json' \
  --data '{
  "role": "Developer",
  "email": "exemple@exemple.com"
}'
```

```json
{
  "etape": "Méthode et type de contenu - PATCH",
  "message": "Vous avez utilisé la méthode PATCH avec le type de contenu application/json.",
  "cours": "Cette étape combine la méthode PATCH avec la spécification du type de contenu. Cela est souvent nécessaire lors de l'envoi de données au serveur.",
  "success": "✅✅✅ Vous avez utilisé la bonne méthode et le bon type de contenu. Vous pouvez passer à l'étape suivante. ✅✅✅Le contenu attendu dans le body correspond à la demande, bravo!",
  "next_step": "Pour passer à l'étape suivante, vous devez faire une requête POST à l'URL \"/etape9\" en incluant un en-tête \"Content-Type\" de type \"application/json\", en fournissant la clé api dans le header: api-key: FenelonBTSSIO et en spécifiant un User-Agent: FenelonBTSSIO-UserAgent-LaRochelle-v1.0 Dans le body, vous devez fournir un json contenant un champ \"name\" qui doit contenir \"Donald Duck\". Bonne chance!"
}
```

### Étape 9:

```bash
curl --request POST \
  --url http://172.16.3.254:8001/etape9 \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: FenelonBTSSIO-UserAgent-LaRochelle-v1.0' \
  --header 'api-key: FenelonBTSSIO' \
  --data '{
  "name": "Donald Duck"
}'
```

```json
{
  "etape": "Méthode et type de contenu - POST",
  "message": "Vous avez utilisé la méthode POST avec le type de contenu application/json.",
  "cours": "La méthode POST est utilisée pour soumettre des données au serveur. L'en-tête \"Content-Type\" est souvent utilisé pour spécifier le format des données envoyées.",
  "success": "✅✅✅ Vous avez utilisé la bonne méthode et le bon type de contenu. Vous avez terminé le jeu de piste! ✅✅✅"
}
```

