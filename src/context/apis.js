const BASE_URL = "http://localhost:8000/v1";

const signin = async (useBody) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(useBody),
  });
  return {
    status: 200 <= res.status < 300 ? "success" : "error",
    data: await res.json(),
  };
};

const getTeacherSubject = async (token, userId, status) => {
  const res = await fetch(
    `${BASE_URL}/grade?status=${status}&teacher=${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return {
    status: 200 <= res.status < 300 ? "success" : "error",
    data: await res.json(),
  };
};

const calculateGradeApiCall = async (token, useBody) => {
  const res = await fetch(`${BASE_URL}/grade/calculate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(useBody),
  });
  return {
    status: 200 <= res.status < 300 ? "success" : "error",
    data: await res.json(),
  };
};

const getGradeById = async (token, id) => {
  const res = await fetch(`${BASE_URL}/grade/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return {
    status: 200 <= res.status < 300 ? "success" : "error",
    data: await res.json(),
  };
};

const getAllSubjects = async (token) => {
  const res = await fetch(`${BASE_URL}/subject?sortBy=semester&limit=100`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return {
    status: 200 <= res.status < 300 ? "success" : "error",
    data: await res.json(),
  };
};

const getAllBatches = async (token) => {
  const res = await fetch(`${BASE_URL}/batch`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return {
    status: 200 <= res.status < 300 ? "success" : "error",
    data: await res.json(),
  };
};

const assignSubject = async (token, useBody) => {
  const res = await fetch(`${BASE_URL}/grade/assign`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(useBody),
  });
  return {
    status: 200 <= res.status < 300 ? "success" : "error",
    data: await res.json(),
  };
};

const getAllTeachers = async (token) => {
  const res = await fetch(`${BASE_URL}/users?limit=100`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return {
    status: 200 <= res.status < 300 ? "success" : "error",
    data: await res.json(),
  };
};

const getAllGradesOfBatch = async (token, batchId) => {
  const res = await fetch(
    `${BASE_URL}/grade?batch=${batchId}&limit=100&sortBy=semester&status=completed`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return {
    status: 200 <= res.status < 300 ? "success" : "error",
    data: await res.json(),
  };
};

const createSubject = async (token, useBody) => {
  const res = await fetch(`${BASE_URL}/subject`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(useBody),
  });
  return {
    status: 200 <= res.status < 300 ? "success" : "error",
    data: await res.json(),
  };
};

const getSubjectById = async (token, id) => {
  const res = await fetch(`${BASE_URL}/subject/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return {
    status: 200 <= res.status < 300 ? "success" : "error",
    data: await res.json(),
  };
};

module.exports = {
  signin,
  getTeacherSubject,
  calculateGradeApiCall,
  getGradeById,
  getAllSubjects,
  getAllBatches,
  assignSubject,
  getAllTeachers,
  getAllGradesOfBatch,
  createSubject,
  getSubjectById,
};
