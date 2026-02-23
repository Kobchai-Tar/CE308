import "./global.css";
import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import CustomInput from "../component/CustomInput";
import CustomButton from "../component/CustomButton";
import Checkbox from "@/component/Checkbox";
import DateTimePicker from "@react-native-community/datetimepicker";

// Interface สำหรับข้อมูล From
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

//Interface สำหรับ Error Messages
interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

export default function Index() {
  // State สำหรับเก็บข้อมูล Form
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // State สำหรับเก็บ Error Messages
  const [errors, setErrors] = useState<FormErrors>({});

  //State สำหรับเช็คค่าว่า field ไหนถูก touch แล้ว
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  //State สำหรับ loading
  const [isLoading, setIsLoading] = useState(false);

  const [address, setAddress] = useState("");

  const [addressError, setAddressError] = useState("");

  const [accepted, setAccepted] = useState(false);

  const [acceptedError, setAcceptedError] = useState("");

  const [gender, setGender] = useState("");

  const [genderError, setGenderError] = useState("");

  const [dob, setDob] = useState<Date | null>(null);

  const [showPicker, setShowPicker] = useState(false);

  const [dobError, setDobError] = useState("");

  //function Validation สำหรับแต่ละ field
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "fullName":
        if (!value.trim()) {
          return "กรุณากรอกชื่อ-นามสกุล";
        }
        if (value.trim().length < 3) {
          return "ชื่อ-นามสกุลต้องมีอย่างน้อย 3 ตัวอักษร";
        }
        return undefined;

      case "email":
        if (!value.trim()) {
          return "กรุณากรอกอีเมลด้วย";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "รูปแบบอีเมลไม่ถูกต้อง";
        }
        return undefined;

      case "phone":
        if (!value.trim()) {
          return "กรุณากรอกเบอร์โทรศัพท์";
        }
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(value)) {
          return "เบอร์โทรศัพท์ต้องเป็นตัวเลข 10 หลัก";
        }
        return undefined;

      case "password":
        if (!value) {
          return "กรุณากรอกรหัสผ่าน";
        }
        if (value.length < 6) {
          return "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร";
        }
        return undefined;

      case "confirmPassword":
        if (!value) {
          return "กรุณายืนยันรหัสผ่าน";
        }
        if (value !== formData.password) {
          return "รหัสผ่านไม่ตรงกัน";
        }
        return undefined;

      default:
        return undefined;
    }
  };

  // function จัดการเมื่อมีการเปลี่ยนแปลงค่าใน Input
  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate realtime ถ้า field เคยถูก touch แล้ว
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }

    // ถ้าเปลี่ยน password ต้อง revalidate confirmPassword
    if (name === "password" && touched.confirmPassword) {
      const confirmError = validateField(
        "confirmPassword",
        formData.confirmPassword
      );
      setErrors((prev) => ({
        ...prev,
        confirmPassword: confirmError,
      }));
    }
  };

  // function จัดการเมื่อ Input ภูก blur (สูญเสียโฟกัส)
  const handleBlur = (name: keyof FormData) => {
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Valiadate เมือ่ blur
    const error = validateField(name, formData[name]);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  //function Validate ทั้ง form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // validate formData หลัก
    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);

    // validate workshop 4
    const isAddressValid = validateAddress();
    const isAcceptedValid = validateAccepted();
    const isGenderValid = validateGender();
    const isDobValid = validateDob();

    if (!isAddressValid || !isAcceptedValid || !isGenderValid || !isDobValid) {
      isValid = false;
    }

    // mark touched
    const allTouched: { [key: string]: boolean } = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    return isValid;
  };


  const handleSubmit = async () => {
    // ปิด Keyboard
    Keyboard.dismiss();

    // Validate Form
    if (!validateForm()) {
      Alert.alert("ข้อมูลไม่ถูกต้อง", "กรุณาตรวจสอบข้อมูลและลองใหม่อีกครั้ง");
      return;
    }

    //จำลองการส่งข้อมูล
    setIsLoading(true);

    //Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert(
        "สำเร็จ!",
        `ลงทะเบียนสำเร็จ\n\nชื่อ: ${formData.fullName}\nอีเมล:${formData.email}\nเบอร์: ${formData.phone}`,
        [
          {
            text: "ตกลง",
            onPress: handleReset,
          },
        ]
      );
    }, 2000);
  };

  //function reset form
  const handleReset = () => {
    // ล้างค่าฟอร์ม
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });

    // ล้าง workshop 4
    setAddress("");
    setAccepted(false);
    setGender("");
    setDob(null);

    // ล้าง error
    setErrors({});
    setAddressError("");
    setAcceptedError("");
    setGenderError("");
    setDobError("");

    // ล้าง touched
    setTouched({});
    setShowPicker(false);
  };


  const validateAddress = () => {
    if (address.trim().length < 10) {
      setAddressError("กรุณากรอกที่อยู่อย่างน้อย 10 ตัวอักษร");
      return false;
    }
    setAddressError("");
    return true;
  };

  const validateAccepted = () => {
    if (!accepted) {
      setAcceptedError("กรุณายอมรับข้อตกลง");
      return false;
    }
    setAcceptedError("");
    return true;
  };


  const validateGender = () => {
    if (!gender) {
      setGenderError("กรุณาเลือกเพศ");
      return false;
    }
    setGenderError("");
    return true;
  };

  const validateDob = () => {
    if (!dob) {
      setDobError("กรุณาเลือกวันเกิด");
      return false;
    }

    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();

    if (age < 13) {
      setDobError("อายุต้องมากกว่า 13 ปี");
      return false;
    }

    setDobError("");
    return true;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          className="flex-1 bg-gray-50"
          contentContainerStyle={{ paddingBottom: 120 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View className="bg-blue-600 pt-20 pb-10 px-6">
            <Text className="text-white text-3xl font-bold">
              ลงทะเบียนสมาชิก
            </Text>
            <Text className="text-blue-100 text-base mt-2">
              กรุณากรอกข้อมูลให้ครบถ้วน
            </Text>
          </View>

          {/* Form Container */}
          <View className="px-6 mt-6">
            {/* ชื่อ-นามสุกล */}
            <CustomInput
              label="ชื่อ-นามสกุล"
              placeholder="ระบุชื่อและนามสกุล"
              value={formData.fullName}
              onChangeText={(value) => handleChange("fullName", value)}
              onBlur={() => handleBlur("fullName")}
              error={errors.fullName}
              touched={touched.fullName}
              autoCapitalize="words" // ขึ้นต้นด้วยตัวใหญ่ทุกคำ
            />

            {/* อีเมล */}
            <CustomInput
              label="อีเมล"
              placeholder="example@email.com"
              value={formData.email}
              onChangeText={(value) => handleChange("email", value)}
              onBlur={() => handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            {/* เบอร์โทรศัพท์ */}
            <CustomInput
              label="เบอร์โทรศัพท์"
              placeholder="0812345678"
              value={formData.phone}
              onChangeText={(value) => handleChange("phone", value)}
              onBlur={() => handleBlur("phone")}
              error={errors.phone}
              touched={touched.phone}
              keyboardType="phone-pad"
              maxLength={10}
            />

            {/* รหัสผ่าน */}
            <CustomInput
              label="รหัสผ่าน"
              placeholder="อย่างน้อย 6 ตัวอักษร"
              value={formData.password}
              onChangeText={(value) => handleChange("password", value)}
              onBlur={() => handleBlur("password")}
              error={errors.password}
              touched={touched.password}
              secureTextEntry
              autoCapitalize="none"
            />

            {/* ยืนยันรหัสผ่าน */}
            <CustomInput
              label="ยืนยันรหัสผ่าน"
              placeholder="ระบุรหัสผ่านอีกครั้ง"
              value={formData.confirmPassword}
              onChangeText={(value) => handleChange("confirmPassword", value)}
              onBlur={() => handleBlur("confirmPassword")}
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
              secureTextEntry
              autoCapitalize="none"
            />

            <View className="mb-4">
              <Text className="font-semibold mb-2">ที่อยู่</Text>

              <TextInput
                className="border border-gray-300 rounded-lg p-3 h-[100px]"
                multiline
                maxLength={200}
                value={address}
                onChangeText={setAddress}
              />

              <Text className="text-right text-gray-500 mt-1">
                {address.length}/200
              </Text>

              {addressError ? (
                <Text className="text-red-500 mt-1">{addressError}</Text>
              ) : null}
            </View>

            {/* Checkbox */}
            <Checkbox
              checked={accepted}
              onToggle={() => setAccepted(!accepted)}
              label="ฉันยอมรับข้อกำหนดและเงื่อนไข"
            />

            {acceptedError ? (
              <Text className="text-red-500 mt-1">{acceptedError}</Text>
            ) : null}

            {/* Gender */}
            <View className="mb-4">
              <Text className="font-semibold mb-2">เพศ</Text>

              <View className="flex-row space-x-4">
                {["ชาย", "หญิง", "ไม่ระบุ"].map((item) => (
                  <TouchableOpacity
                    key={item}
                    onPress={() => setGender(item)}
                    className="flex-row items-center"
                  >
                    <View
                      className={`w-4 h-4 rounded-full border mr-2 ${gender === item ? "bg-blue-600" : "bg-white"
                        }`}
                    />
                    <Text>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              {genderError ? (
                <Text className="text-red-500 mt-1">{genderError}</Text>
              ) : null}
            </View>

            {/* Birthday */}
            <View className="mb-4">
              <Text className="font-semibold mb-2">วันเกิด</Text>

              <TouchableOpacity
                onPress={() => setShowPicker(true)}
                className="border border-gray-300 rounded-lg p-3"
              >
                <Text>
                  {dob
                    ? dob.toLocaleDateString("en-GB")
                    : "เลือกวันเกิด (DD/MM/YYYY)"}
                </Text>
              </TouchableOpacity>

              {showPicker && (
                <DateTimePicker
                  value={dob || new Date()}
                  mode="date"
                  display="default"
                  onChange={(event, selectedDate) => {
                    setShowPicker(false);
                    if (selectedDate) setDob(selectedDate);
                  }}
                />
              )}

              {dobError ? (
                <Text className="text-red-500 mt-1">{dobError}</Text>
              ) : null}
            </View>

            {/* Button */}
            <View className="mt-4">
              <CustomButton
                title="ลงทะเบียน"
                onPress={handleSubmit}
                variant="primary"
                loading={isLoading}
              />

              <View className="h-3" />

              <CustomButton
                title="รีเซ็ตฟอร์ม"
                onPress={handleReset}
                variant="secondary"
                disabled={isLoading}
              />
            </View>

            {/* Info Box */}
            <View className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <Text className="text-blue-800 font-semibold text-base mb-2">
                คำแนะนำ
              </Text>
              <Text className="text-blue-700 text-sm leading-5">
                - กรอกข้อมูลให้ครบถ้วน{"\n"}
                - อีเมลต้องมีรูปแบบที่ถูกต้อง{"\n"}
                - เบอร์โทรศัพท์ต้องเป็นตัวเลข 10 หลัก{"\n"}
                - รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร
              </Text>

            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}