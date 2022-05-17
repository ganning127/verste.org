export default async function handler(req, res) {
  const { paper, question, num } = JSON.parse(req.body);

  try {
    const resp = await fetch(
      "https://hf.space/embed/ganning/summarize/+/api/predict/",
      {
        method: "POST",
        body: JSON.stringify({ data: [paper, question, parseInt(num)] }),
        headers: { "Content-Type": "application/json" },
      }
    );

    const respData = await resp.json();

    console.log(respData);
    const data = respData.data;
    const summary = data[0];
    const bullets = eval(data[1]);
    // const bullets = data[1];
    const answer = data[2];

    res.status(200).json({ summary, bullets, answer });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "err" });
  }
}
