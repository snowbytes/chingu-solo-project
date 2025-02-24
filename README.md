# Solo project submission for chingu

This is a very minimalist (and ugly) fullstack project aiming to pass tier 3's requirements without using a framework like next or remix to keep the magic minimal. It leverages what I noticed are the technologies most highlighted in roundtables.

Once again. Apologies for the visual nightmare. there is no CSS in this. I preferred whipping the project in the last minute rather than rely on a support ticket as a V10 alumni.
I am open to making this prettier (no pun intended) if the opportunity presents itself.

## Characteristics

- includes distinct files which separate the FE and BE application logic and tries to adhere to SRP.
- database access is done through the BE logic.
- The BE logic implements app-specific API that is served to and accessed by the FE to deliver services to the end user.
- The FE logic operates on the data that it gets from the BE through its API and transforms then presents it to the end user
- The BE API interfaces with a NoSQL DBMS in MongoDB (using Atlas).
- THE BE includes all standard CRUD operations, although the frontend doesn't leverage the update endpoint.
