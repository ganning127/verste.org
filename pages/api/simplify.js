export default async function handler(req, res) {
  const { paper, num } = JSON.parse(req.body);

  try {
    const resp = await fetch(
      "https://ganning-summarize.hf.space/api/predict/",
      {
        method: "POST",
        body: JSON.stringify({ data: [paper, parseInt(num)] }),
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log(resp);
    const respData = await resp.json();

    console.log(respData);
    const data = respData.data;
    // const summary = data[0];
    const bullets = eval(data[0]);
    // const bullets = data[1];
    // const answer = data[2];

    res.status(200).json({ bullets });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.error });
  }
}
