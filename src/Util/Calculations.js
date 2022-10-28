const getPo = (map, att) => {
  const op = [];
  map.forEach((po) => {
    let sum = 0;
    po.content.forEach((co) => {
      const ans = (co.value * att[co.co]) / 3;
      sum += ans;
    });
    sum = sum / po.content.length;
    op.push({
      title: po.title,
      value: sum,
    });
  });
  return op;
};

// first param 80% and second 20%
const calculate80and20 = (a, b) => {
  const op = [];
  a.forEach((ele, idx) => {
    let x = {
      title: ele.title,
      value: ele.value * 0.8 + b[idx].value * 0.2,
    };
    op.push(x);
  });
  return op;
};

const transFormMapping = (map) => {
  const mapping = [
    {
      title: "PO1",
      content: [],
    },
    {
      title: "PO2",
      content: [],
    },
    {
      title: "PO3",
      content: [],
    },
    {
      title: "PO4",
      content: [],
    },
    {
      title: "PO5",
      content: [],
    },
    {
      title: "PO6",
      content: [],
    },
    {
      title: "PO7",
      content: [],
    },
    {
      title: "PO8",
      content: [],
    },
    {
      title: "PO9",
      content: [],
    },
    {
      title: "PO10",
      content: [],
    },
    {
      title: "PO11",
      content: [],
    },
    {
      title: "PO12",
      content: [],
    },
  ];
  map.forEach((ele, idx) => {
    if (ele.PO1 != null)
      mapping[0].content.push({ co: idx + 1, value: parseInt(ele.PO1) });
    if (ele.PO2 != null)
      mapping[1].content.push({ co: idx + 1, value: parseInt(ele.PO2) });
    if (ele.PO3 != null)
      mapping[2].content.push({ co: idx + 1, value: parseInt(ele.PO3) });
    if (ele.PO4 != null)
      mapping[3].content.push({ co: idx + 1, value: parseInt(ele.PO4) });
    if (ele.PO5 != null)
      mapping[4].content.push({ co: idx + 1, value: parseInt(ele.PO5) });
    if (ele.PO6 != null)
      mapping[5].content.push({ co: idx + 1, value: parseInt(ele.PO6) });
    if (ele.PO7 != null)
      mapping[6].content.push({ co: idx + 1, value: parseInt(ele.PO7) });
    if (ele.PO8 != null)
      mapping[7].content.push({ co: idx + 1, value: parseInt(ele.PO8) });
    if (ele.PO9 != null)
      mapping[8].content.push({ co: idx + 1, value: parseInt(ele.PO9) });
    if (ele.PO10 != null)
      mapping[9].content.push({ co: idx + 1, value: parseInt(ele.PO10) });
    if (ele.PO11 != null)
      mapping[10].content.push({ co: idx + 1, value: parseInt(ele.PO11) });
    if (ele.PO12 != null)
      mapping[11].content.push({ co: idx + 1, value: parseInt(ele.PO12) });
  });
  return mapping;
};

const transformUni = (uni) => {
  const res = [0];
  for (let i = 0; i < 6; i++) res.push(uni[0].Attainment);
  return res;
};

const transformPt = (pt) => {
  const res = [0];
  pt.forEach((ele) => {
    res.push(ele.Attainment);
  });
  return res;
};

const getFinalAttainment = (map, uni, ia, exit) => {
  const res = [];
  const mapping = transFormMapping(map);
  const theory = transformUni(uni);
  const pt = transformPt(ia);
  const indirect = transformPt(exit);

  const opPt = getPo(mapping, pt);
  const opTheory = getPo(mapping, theory);
  const opIndirect = getPo(mapping, indirect);

  const opDirect = calculate80and20(opTheory, opPt);
  const final = calculate80and20(opDirect, opIndirect);

  for (let i = 0; i < 12; i++) {
    if (mapping[i].content.length > 0)
      res.push({
        po: `PO${i + 1}`,
        x1: opTheory[i].value.toFixed(2),
        x2: opPt[i].value.toFixed(2),
        y1: opDirect[i].value.toFixed(2),
        y2: opIndirect[i].value.toFixed(2),
        final: final[i].value.toFixed(2),
      });
  }
  return res;
};
module.exports = {
  getFinalAttainment,
};
